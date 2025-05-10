from PIL import Image

# Load the image
input_path = "attached_assets/IMG_4202.jpg"
output_path = "attached_assets/IMG_4202_headshot.jpg"

try:
    # Open the original image
    original_img = Image.open(input_path)
    width, height = original_img.size
    
    print(f"Original image dimensions: {width}x{height}")
    
    # For a headshot, we'll focus on the top 40% of the image and create a square crop
    # centered horizontally
    
    # Calculate the crop dimensions for a square headshot
    # Use a smaller portion of the height (40%) for a tighter headshot
    crop_height = int(height * 0.4)
    # Make it square by using the same value for width
    crop_width = crop_height
    
    # Center the crop horizontally
    left = (width - crop_width) // 2
    top = int(height * 0.1)  # Start a bit from the top (10% down)
    right = left + crop_width
    bottom = top + crop_height
    
    # Perform the crop
    headshot_img = original_img.crop((left, top, right, bottom))
    
    # Save the cropped image
    headshot_img.save(output_path)
    headshot_width, headshot_height = headshot_img.size
    
    print(f"Headshot dimensions: {headshot_width}x{headshot_height}")
    print(f"Headshot saved to: {output_path}")
    
except Exception as e:
    print(f"Error processing image: {e}")