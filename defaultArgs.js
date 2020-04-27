const blog = {
    title: "My awesome post",
    summary : "My summary post"
   
}

const openGraphMetadata = ({title, summary = "Show Me The Tech"})=> {
  console.log(`
  og-title=${title}
  og-description=${summary}
  `); 
}

openGraphMetadata(blog);