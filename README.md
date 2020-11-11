Each field is required. If there is no user input in that field, it is marked as invalid.

If the input is invalid the label for that field changes to instruct the user how to correct the input.

This message goes away if the field is later marked as valid.

The following are the validations:

* Car year must be a number.
* Car year must be after 1900.
* Car year cannot be in the future.
* Date parking must be in the future.
* Number of days must be a number.
* Number of days must be between 1 and 30.
* CVV must be a three-digit number.
* Expiration date must be a valid month and year.
* Expiration date must not be in the past.

Once the form is valid the user is shown the total cost of their parking when they click the "Make Reservation" button. The div with id "total" appears filled with text showing the cost. This text is removed if the form becomes invalid.

The cost is $5 per weekday, and $7 per weekend day. `.map` and `.reduce` will be very helpful in calculating the total cost.

"4111111111111111" is a valid card number you can use for testing purposes.

