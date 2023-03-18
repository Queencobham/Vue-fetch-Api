<template>
    <div className="page-not-found">
        <div className="page-text-top">
          <h1>Oops!</h1>
          <p>404 - page not found</p>
        </div>
        <div className="page-text-bottom">
          <p>The page you are looking for might have been removed, had its name changed or is temporarily unavailable.</p>
          <router-link to="/">Back to Homepage</router-link>
        </div>
    </div> 
</template>

<style scoped>
.page-not-found{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
}

.page-text-top h1{
    margin-top: -0.3em;
    font-size: 13rem;
    background-color: #0969da;
    background-clip: text;
    letter-spacing: -.03em;
}

.page-text-top p{
   color: #24292f;
   text-transform: uppercase;
   font-size: 1.6rem;
   letter-spacing: .07em;
   font-weight: 700;
   margin-top: -70px;
}

.page-text-bottom p{
  color: #57606a;
  font-size: 1.1rem;
  width: 60%;
  margin: 0 auto;
  margin-bottom: 2em;
}

.page-text-bottom a{
    text-transform: uppercase;
    text-decoration: none;
    color: #fff;
    background-color: #0969da;
    padding: 0.8em 2em;
    font-size: 1rem;
    font-weight: 700;
    border-radius: 10px;
}

.page-text-bottom a:hover{
    background-color: transparent;
    border: 2px solid #0969da;
    color: #24292f;
}

@media screen and (max-width: 601px){
    .page-text-top h1{
        font-size: 10rem;
    }

    .page-text-bottom p{
        color: #c4c4c4;
        font-size: 1.1rem;
        width: 90%;
    }
}

@media screen and (max-width: 389px){
    .page-text-top h1{
        font-size: 7rem;
    }

    .page-text-top p{
        font-size: 1.3rem;
     }

    .page-text-bottom p{
        color: #c4c4c4;
        font-size: 1.09rem;
        width: 90%;
    }

    .page-text-bottom a{
        padding: 0.8em 1.5em;
        font-size: 1rem;
    }
}
</style>
