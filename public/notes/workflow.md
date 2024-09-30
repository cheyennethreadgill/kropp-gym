
<!-- Bootsrtap overrides --------------------------------------->
Buttons
    can change primary color
    outline
    size
        **8 add global styles then consolidate code (similar appearances)

<!-- IMAGES--- bootstrap carousel item Image ----------------------
    * add fluid to all

    1. set image to fluid
    2. set carousel image and regular image to 100% height and width of image container
    3. Set image container width 100% and height to whatever vh

    CODE--------------------
        .carousel {

            &-item {
                width: 100%;
                height: 100vh;

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }

        .img-container {
            width: 100%;
            height: 50vh;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

-->
