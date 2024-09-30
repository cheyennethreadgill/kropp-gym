how to fufill orders through chat

<!--
                MAKE ORDER INTENT
        customer wants to view all protein bars in the shop
                show all protein bars
        customer should be able to add to cart
                create post endpoint for the cart so when the customer clicks the add to cart button in the chat, frontend will make a post request to the cart

                    ****CHANGES

                            will need to update the product showcase and add to cart btn functionality, so instead of increasing the cart lenght only, the user will make a post request for the cart, the you can retrieve the amount of items in the cart

                        TO DO:
                            **Change Cart (COMPONENT)
                                - the front end will create a cartID/post to CART table
                                    math random?
                                        --later the user will have to be logged in
                                - will post item details to the cartItems table
                                - will then fetch cartItems from backend to show in the cart

                            **add cart post req to backend in chatbot (SERVER)
                                - will handle post items to the cartItems table

                            **create a cart table (DATABASE)
                                - columns
                                    CartID (this will tie into the specific cart with this ID)
                                - cartItems (this will hold the cart items for the ID matched)
                                    columns
                                        id, name, img, price, quantity
     -->

<!-- title headers
    <!-- slider -->

        how can we animate the progress value number from 0 to its value?

<!--
        add animation when screen reaches certain point

        container for whole word
            second container
                invisible masks for each letter
                        masks are at the end position of each letter
                    transform translate each letter on x axis
        the letter is contained to the mask
            the letter is translated beyond the mask
        the mask is set to overflow hidden to hide the letter while its out of site -->

<!-- Navcar -->
<!--
when the carosel contains img that requires light text, change the nabar color to light

---------steps
1. check if carousel image is dark or light
2. set the navbar to light or dark depending on image color
3. need to pass the navbar color state into header to enable mods
4. create image component where you can alter ange the props
ORR
4.a



























 -->
