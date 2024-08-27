var posts=["2024/08/21/My-New-Post/","2024/08/21/hello-world/","2024/08/27/又要开学了/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };