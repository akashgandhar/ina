import requests
import base64
import time

def test_upload_additional_images_for_first_product(shopify_api_client):
    """
    Fetches the first product from Shopify, extracts the SKU, and tests
    uploading additional images for it.

    Args:
        shopify_api_client: Your custom API client object for interacting with Shopify.
    """
    print("\nFetching the first product...")
    products_data = shopify_api_client.get_all_products(limit=1)
    products = products_data.get('products', [])

    if not products:
        print("No products found in your store.")
        return

    first_product = products[0]
    sku = first_product.get('variants', [{}])[0].get('sku')

    if not sku:
        print(f"The first product '{first_product.get('title')}' has no SKU in the first variant.")
        return

    print(f"\nTesting additional image upload for product: {first_product.get('title')} (SKU: {sku})")
    image_number = 2
    while image_number <= 5:  # Limit the test to a few image numbers
        image_url = f"https://digimages.vercel.app/collection/{sku}/{sku}-{image_number}.jpg"
        try:
            response = requests.get(image_url)
            if response.status_code == 200:
                print(f"  Found image: {image_url}")
                image_bytes = response.content
                base64_image = base64.b64encode(image_bytes).decode('utf-8')

                image_data = {
                    "image": {
                        "position": image_number + len(first_product.get('images', [])),
                        "attachment": base64_image,
                        "filename": f"{sku}-{image_number}-TEST.jpg", # Add "-TEST" to filename
                        "alt": f"{sku} - Test Image {image_number}"
                    }
                }

                try:
                    product_id = first_product['id']
                    upload_response = shopify_api_client.upload_product_image(product_id, image_data)
                    if upload_response:
                        print(f"  Successfully uploaded {image_url} (TEST) to product ID: {product_id}")
                    time.sleep(1) # Rate limit
                except Exception as e:
                    print(f"  Error uploading {image_url} (TEST): {e}")
                    break
                image_number += 1
            elif response.status_code == 404:
                print(f"  Image {image_url} not found.")
                image_number += 1
            else:
                print(f"  Unexpected status code {response.status_code} for {image_url}.")
                break
        except requests.exceptions.RequestException as e:
            print(f"  Error checking {image_url}: {e}")
            break

    print("\nTesting complete. Check your Shopify admin for the test images (filenames ending with '-TEST').")

def upload_additional_images_for_all_products(shopify_api_client):
    """
    Fetches all products from Shopify, extracts the SKU, and checks for additional
    images to upload. (Full function as before)
    """
    page = 1
    while True:
        print(f"\nFetching products page: {page}")
        products_data = shopify_api_client.get_all_products(page=page)
        products = products_data.get('products', [])
        if not products:
            print("No more products found.")
            break

        for product in products:
            sku = product.get('variants', [{}])[0].get('sku')
            if sku:
                print(f"\nProcessing product: {product.get('title')} (SKU: {sku})")
                image_number = 2
                while True:
                    image_url = f"https://digimages.vercel.app/collection/{sku}/{sku}-{image_number}.jpg"
                    try:
                        response = requests.get(image_url)
                        if response.status_code == 200:
                            print(f"  Found image: {image_url}")
                            image_bytes = response.content
                            base64_image = base64.b64encode(image_bytes).decode('utf-8')

                            image_data = {
                                "image": {
                                    "position": image_number + len(product.get('images', [])),
                                    "attachment": base64_image,
                                    "filename": f"{sku}-{image_number}.jpg",
                                    "alt": f"{sku} - Image {image_number}"
                                }
                            }

                            try:
                                product_id = product['id']
                                shopify_api_client.upload_product_image(product_id, image_data)
                                print(f"  Uploaded {image_url} to product ID: {product_id}")
                                image_number += 1
                                time.sleep(1) # Rate limit
                            except Exception as e:
                                print(f"  Error uploading {image_url}: {e}")
                                break
                        elif response.status_code == 404:
                            print(f"  No more additional images found for SKU: {sku} after {image_number - 1}.")
                            break
                        else:
                            print(f"  Unexpected status code {response.status_code} for {image_url}.")
                            break
                    except requests.exceptions.RequestException as e:
                        print(f"  Error checking {image_url}: {e}")
                        break
            else:
                print(f"  Product '{product.get('title')}' has no SKU in the first variant.")

        page += 1
        time.sleep(2) # Rate limit for fetching pages

# --- Modified Example ShopifyAPIClient (if needed) ---
class ShopifyAPIClient:
    def __init__(self, api_key, access_token, shop_url):
        self.api_key = api_key
        self.access_token = access_token
        self.shop_url = shop_url
        self.api_version = "2025-04"
        self.headers = {
            "X-Shopify-Access-Token": self.access_token,
            "Content-Type": "application/json"
        }

    def get_all_products(self, page=1, limit=50):
        url = f"https://{self.shop_url}/admin/api/{self.api_version}/products.json?page={page}&limit={limit}"
        response = requests.get(url, headers=self.headers)
        if response.status_code == 200:
            return response.json()
        else:
            print(f"Error fetching products (page {page}): {response.status_code} - {response.text}")
            return {}

    def upload_product_image(self, product_id, image_data):
        url = f"https://{self.shop_url}/admin/api/{self.api_version}/products/{product_id}/images.json"
        response = requests.post(url, headers=self.headers, json=image_data)
        if response.status_code == 201:
            print("    Image uploaded successfully.")
            return response.json()
        else:
            print(f"    Error uploading image to product {product_id}: {response.status_code} - {response.text}")
            return None

# --- Example Usage (TEST FIRST) ---
if __name__ == "__main__":
    # Replace with your actual API key, access token, and shop URL
    API_KEY = "9c9e20a92e8ce99656bda149c6722f7a"
    SHOP_URL = "https://52a54f-dd.myshopify.com"

    shopify_client = ShopifyAPIClient(API_KEY, ACCESS_TOKEN, SHOP_URL)

    # Run the test function for the first product
    test_upload_additional_images_for_first_product(shopify_client)

    # After you've confirmed the test works, you can uncomment the line below
    # to run the full function for all products.
    # upload_additional_images_for_all_products(shopify_client)