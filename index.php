<?php include ("contact_form_process.php"); ?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Modern Javascript Form</title>

    <!-- Stylesheet -->
    <link rel="stylesheet" href="assets/css/styles.min.css">

    <!-- google font  -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600&family=Roboto:ital,wght@1,300&display=swap" rel="stylesheet"> 

    <!-- Fontawesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />

    <!-- Js script -->
    <script src="/assets/js/burgerMenu.js" defer></script>
    <script src="/assets/js/showHidePassword.js" defer></script>
    <script src="/assets/js/formValidation.js" defer></script>
</head>
<body>
    <header>
        <img id="logo" src="/assets/img/SBT.png" alt="logo">
        <div id="h1Container">
            <h1>Modern Javascript Form</h1>
        </div>
        <div id="burgerMenuMainContainer">
            <div id="burgerMenuOpenerContainer">
                <div class="bgMenuBar" id="bgMenuBar1"></div>
                <div class="bgMenuBar" id="bgMenuBar2"></div>
                <div class="bgMenuBar" id="bgMenuBar3"></div>
            </div>
            <div id="burgerMenuContentContainer">
                <div id="closeBurgerMenu" title="Cliquez pour fermer">x</div>
                <div id="myLink">
                    <p>Designed and developed by <a href="https://simonbenet.com/index.html" title="Link to my website" rel="noopener noreferrer" target="_blank" ><strong>Simon Bénet</strong></a></p>
                </div>
                <div id="contactIconsContainer">
                    <a href="" class="externLink" rel="noopener noreferrer" target="_blank"><img class="externLinkIcons" title="Link to my Facebook profile" src="/assets/img/svg/facebook.svg" alt="Facebook icon"></a>
                    <a href="" class="externLink" title="link to my Linkedin profile" rel="noopener noreferrer" target="_blank"><img class="externLinkIcons" src="/assets/img/svg/linkedin.svg" alt="Linkedin icon" rel="noopener noreferrer" target="_blank"></a>
                    <a href="" class="externLink" title="link to my Instagram profile" rel="noopener noreferrer" target="_blank"><img class="externLinkIcons" src="/assets/img/svg/instagram.svg" alt="Instagram icon"></a>
                    <a href="" class="externLink" title="Link to my Github profile" rel="noopener noreferrer" target="_blank"><img class="externLinkIcons" src="/assets/img/svg/github-black.svg" alt="Github icon"></a>
                    <a href="" class="externLink" title="Link to my Codepen profile" rel="noopener noreferrer" target="_blank"><img class="externLinkIcons" src="/assets/img/svg/codepen-black.svg" alt="Codepen icon"></a>
                    <a href="https://simonbenet.com/index.html" class="externLink"  title="Link to my personal website" rel="noopener noreferrer" target="_blank"><img class="externLinkIcons" src="/assets/img/svg/website.svg" alt="Website icon"></a>
                </div>
            </div>
        </div>
    </header>
    <main>
        
                           <!-- CONTACT FORM -->

        <h2 class="formName" id="contactFormName">Contact Form</h2>
        <div class="formMainContainer" id="contactFormContainer">
            <div class="card">
                <div class="cardLogoContainer">
                    <img src="/assets/img/svg/brain.svg" alt="brain svg" class="formLogo">
                </div>
                <div class="cardHeader">
                    <h3 class="formTitle">Contact us</h3>
                    <p class="formTxt">Please fill this form before submitting</p>
                </div>
                <form action="/assets/php/contact_form_process.php" method="post" class="form">
                    <div class="formItem">
                        <span class="itemIcon material-symbols-outlined">person</span>
                        <input type="text" name="contact_name" class="formInput nameInput" placeholder="Enter your full name" required>
                        <p class="nameError"></p>
                    </div>
                    <div class="formItem">
                        <span class="itemIcon material-symbols-outlined">mail</span>
                        <input type="contact_email" name="email" class="formInput" placeholder="Enter Email" required autofocus>
                        <p class="emailError"></p>
                    </div>
                    <div class="formItem">
                        <span class="itemIcon material-symbols-outlined">comment</span>
                        <input type="text" name="contact_message" class="formInput messageInput" placeholder="Your message" required autofocus>
                        <p class="messageError"></p>
                    </div>
                    <button class="formBtn" name="contact_submit" type="submit">SUBMIT</button>
                </form>
                <div class="formFooter" id="loginFooter">
                    <span></span>
                </div>
            </div>
        </div>
        
                             <!-- LOGIN FORM -->
        
        <h2 class="formName" id="loginFormName">Login Form</h2>
        <div class="formMainContainer" id="loginFormContainer">
            <div class="card">
                <div class="cardLogoContainer">
                    <img src="/assets/img/svg/brain.svg" alt="brain svg" class="formLogo">
                </div>
                <div class="cardHeader">
                    <h3 class="formTitle">Sign In</h3>
                    <p class="formTxt">Please login to use platform</p>
                </div>
                <form action="/assets/php/login_form_process.php" method="post" class="form">
                    <div class="formItem">
                        <span class="itemIcon material-symbols-outlined">mail</span>
                        <input type="email" class="formInput" placeholder="Enter Email" required autofocus>
                        <p class="emailError"></p>
                    </div>
                    <div class="formItem">
                        <span class="itemIcon material-symbols-outlined">lock</span>
                        <input type="password" class="formInput" placeholder="Enter Password" required>
                        <span class="material-symbols-outlined showIcon">visibility</span>
                        <span class="material-symbols-outlined hideIcon">visibility_off<span>
                    </div>
                    <div class="formItemOther">
                        <div id="checkboxContainer">
                            <input type="checkbox" id="remenberMeCheckbox">
                            <label for="remenberMeCheckbox">Remember me</label>
                        </div>
                        <a href="#">I forgot my password !</a>
                    </div>
                    <button class="formBtn" type="submit">Sign In</button>
                </form>
                <div class="formFooter" id="loginFooter">
                    <span>Don't have an account ?</span><a href="#"> Create a free account here !</a>
                </div>
            </div>
            <div id="formCardSocial">
                <p>Other Sign-in Platform</p>
                <div id="socialBtn">
                    <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-facebook" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path>
                        </svg>
                    </a>
                    <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-google" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M17.788 5.108a9 9 0 1 0 3.212 6.892h-8"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </div>

                             <!-- SIGN UP FORM -->
        
        <h2 class="formName" id="signUpFormName">Sign Up Form</h2>
        <div class="formMainContainer" id="signUpFormContainer">
            <div class="card">
                <div class="cardLogoContainer">
                    <img src="/assets/img/svg/brain.svg" alt="brain svg" class="formLogo">
                </div>
                <div class="cardHeader">
                    <h3 class="formTitle">Sign Up</h3>
                    <p class="formTxt">If you don't have an account, please sign up to use platform</p>
                </div>
                <form action="/assets/php/signup_form_process.php" method="post" class="form">
                    <div class="formItem">
                        <span class="itemIcon material-symbols-outlined">mail</span>
                        <input type="email" class="formInput" placeholder="Enter Email" required autofocus>
                        <p class="emailError"></p>
                    </div>
                    <div class="formItem">
                        <span class="itemIcon material-symbols-outlined">lock</span>
                        <input type="password" class="formInput" placeholder="Enter Password" required>
                        <span class="material-symbols-outlined showIcon">visibility</span>
                        <span class="material-symbols-outlined hideIcon">visibility_off<span>
                    </div>
                    <div class="formItem">
                        <span class="itemIcon material-symbols-outlined">lock</span>
                        <span class="material-symbols-outlined showIcon">visibility</span>
                        <input type="password" class="formInput" placeholder="Confirm Password" required>
                        <span class="material-symbols-outlined hideIcon">visibility_off<span>
                    </div>
                    <button class="formBtn" type="submit">sign up</button>
                </form>
                <div class="formFooter" id="loginFooter">
                    <span>Already have an account ?</span><a href="#"> Login here !</a>
                </div>
            </div>
            <div id="formCardSocial">
                <p>Other Sign-in Platform</p>
                <div id="socialBtn">
                    <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-facebook" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path>
                        </svg>
                    </a>
                    <a href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-google" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M17.788 5.108a9 9 0 1 0 3.212 6.892h-8"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </main>
    <footer>
        <!-- <div id="submitError"><p id="errorMessage"></p></div> -->
    </footer>
</body>
</html>