const putCard = (image, title, name, link) => {
  image.alt = name;
  image.src = link;
  title.textContent = name;
}

export default putCard