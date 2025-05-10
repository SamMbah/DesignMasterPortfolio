from PIL import Image
import math
import numpy as np

# Load the image
input_path = "attached_assets/IMG_4202.jpg"
output_path = "attached_assets/IMG_4202_half_body.png"

try:
    # Open the original image
    original_img = Image.open(input_path)
    width, height = original_img.size
    
    print(f"Original image dimensions: {width}x{height}")
    
    # For a half-body portrait, we'll use about 60% of the original height
    # and maintain a square aspect ratio for the circular crop
    crop_height = int(height * 0.60)
    crop_width = crop_height  # Square aspect ratio
    
    # Center the crop horizontally
    left = (width - crop_width) // 2
    # Start higher up to include more of the upper body
    top = int(height * 0.05)  
    right = left + crop_width
    bottom = top + crop_height
    
    # Perform the crop
    half_body_img = original_img.crop((left, top, right, bottom))
    half_body_width, half_body_height = half_body_img.size
    
    # Create a circular mask
    mask = Image.new('L', (half_body_width, half_body_height), 0)
    draw = Image.new('L', (half_body_width, half_body_height), 0)
    
    # Create a circular mask
    mask_array = np.zeros((half_body_height, half_body_width), dtype=np.uint8)
    center = (half_body_width // 2, half_body_height // 2)
    radius = min(center[0], center[1])
    
    y, x = np.ogrid[:half_body_height, :half_body_width]
    dist_from_center = np.sqrt((x - center[0])**2 + (y - center[1])**2)
    mask_array[dist_from_center <= radius] = 255
    
    # Convert the numpy array to a PIL Image
    mask = Image.fromarray(mask_array)
    
    # Create a new image with transparent background
    result = Image.new('RGBA', (half_body_width, half_body_height), (0, 0, 0, 0))
    
    # Temporarily convert half_body_img to RGBA if it's not already
    if half_body_img.mode != 'RGBA':
        half_body_img = half_body_img.convert('RGBA')
    
    # Apply the mask
    result.paste(half_body_img, (0, 0), mask)
    
    # Save the cropped image with the transparent circular mask
    result.save(output_path)
    
    print(f"Half-body portrait dimensions: {half_body_width}x{half_body_height}")
    print(f"Half-body portrait saved to: {output_path}")
    
except Exception as e:
    print(f"Error processing image: {e}")