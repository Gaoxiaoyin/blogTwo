var posts=["2024/09/08/Tips/","2024/08/21/hello-world/","2024/08/27/又要开学了/","2024/09/12/地球Online生存日记(9.12)/","2024/08/21/My-New-Post/","2024/09/18/『中秋节』/","2024/09/10/地球Online生存日记(9.9-9.10)/","2024/09/18/班闻小报/","2024/08/28/我服了/","2024/10/04/语文国庆作业/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };