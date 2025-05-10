from PIL import Image

# Load the image
input_path = "attached_assets/IMG_4202.jpg"
output_path = "attached_assets/IMG_4202_cropped.jpg"

try:
    # Open the original image
    original_img = Image.open(input_path)
    width, height = original_img.size
    
    print(f"Original image dimensions: {width}x{height}")
    
    # Crop from the top-left corner to 60% of the height
    cropped_img = original_img.crop((0, 0, width, int(height * 0.6)))
    
    # Save the cropped image
    cropped_img.save(output_path)
    cropped_width, cropped_height = cropped_img.size
    
    print(f"Cropped image dimensions: {cropped_width}x{cropped_height}")
    print(f"Cropped image saved to: {output_path}")
    
except Exception as e:
    print(f"Error processing image: {e}")