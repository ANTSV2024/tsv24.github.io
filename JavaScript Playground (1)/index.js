// Get all the images
image_array = ["1.jpg","2.jpg","3.jpg","4.jpg"];

function get_random_image() {
  // Get a random index
  random_index = Math.floor(Math.random() * image_array.length);

  // Get an image at the random_index
  selected_image = image_array[random_index];

  // Display the image
  console.log(selected_image);
  document.getElementById("image_shower").src = `./images/${selected_image}`;
}
