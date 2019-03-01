let img1 = "";
let img2 = "";
let img3 = "";
let img4 = "";
let img5 = "";
let counter = 0;

function next()
{
  counter++;
  let kittenPic = document.getElementById("image")

  if( counter % 5 == 0)
  {
    kittenPic.src = "https://www.hillspet.com/content/dam/cp-sites/hills/hills-pet/en_us/exported/cat-care/new-pet-parent/images/mother-cat-and-kitten-sleeping.jpg";
  }
  else if( counter % 5 == 1)
  {
    kittenPic.src = "https://g77v3827gg2notadhhw9pew7-wpengine.netdna-ssl.com/wp-content/uploads/2017/03/kitten-anxiety_canna-pet-e1490739366728-1024x683.jpg";
  }
  else if( counter % 5 == 2)
  {
    kittenPic.src = "https://www.aspca.org/sites/default/files/blog_foster-myth_062718_main.jpg";
  }
  else if( counter % 5 == 3)
  {
    kittenPic.src = "https://static1.squarespace.com/static/57242faa7da24f738c3b9c32/t/5a9d731924a6946e730843d1/1520268068831/_DSC6928.jpg";
  }
  else
  {
    kittenPic.src = "https://www.catster.com/wp-content/uploads/2017/12/A-gray-kitten-meowing.jpg";
  }
}

function previous()
{
  counter--;
  let kittenPic = document.getElementById("image")

  if( counter % 5 == 0)
  {
    kittenPic.src = "https://www.hillspet.com/content/dam/cp-sites/hills/hills-pet/en_us/exported/cat-care/new-pet-parent/images/mother-cat-and-kitten-sleeping.jpg";
  }
  else if( counter % 5 == 1)
  {
    kittenPic.src = "https://g77v3827gg2notadhhw9pew7-wpengine.netdna-ssl.com/wp-content/uploads/2017/03/kitten-anxiety_canna-pet-e1490739366728-1024x683.jpg";
  }
  else if( counter % 5 == 2)
  {
    kittenPic.src = "https://www.aspca.org/sites/default/files/blog_foster-myth_062718_main.jpg";
  }
  else if( counter % 5 == 3)
  {
    kittenPic.src = "https://static1.squarespace.com/static/57242faa7da24f738c3b9c32/t/5a9d731924a6946e730843d1/1520268068831/_DSC6928.jpg";
  }
  else
  {
    kittenPic.src = "https://www.catster.com/wp-content/uploads/2017/12/A-gray-kitten-meowing.jpg";
  }
}
