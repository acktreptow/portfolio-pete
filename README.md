# React Portfolio Page

This was the final project for the Advanced React chapter of Meta's Front-End Developer course. In order to receive the Advanced React certification, I had to create a portfolio page for a man named Pete.

## Technologies used:

- React
- Chakra UI
- Formik
- Yup

## Project Overview

The specification for Pete's portfolio page was extensive. There needed to be a header, landing page, projects section and contact form. I also had to complete these sections using Chakra UI, Formik and Yup. Technologies I had never come across before. They weren't even mentioned in the Advanced React chapter beforehand!

Overall, this was a very tough but equally fulfilling app to complete due to my inexperience with these more advanced technologies. But thank to this project, I now have significant experience in them, which then allowed me to take this portfolio page beyond the required specifications and turn into a much stronger application. For example, I incorporated responsive design throughout all 4 sections. This was particularly exciting to do. Due to Meta not asking for this and therefore not even having a prompt to work off, I had to really delve into the Chakra documentation to figure out how to do it correctly. Fortunately, I was successful, resulting in the header, project section and contact form looking great on screens smaller than 768px.

Below is also some more granular information about each section.

### Header

The header had to contain external links to social media accounts and internal links to other sections of the page that would scroll smoothly to them when clicked. For extra credit, we could implement a show-hide animation depending on the scroll direction, which I implemented.

### Landing page

This was the most basic section and therefore easiest to complete. It contains just an image of Pete and a short bio.

### Projects section

For this section, Pete's projects had to display in a 2x2 grid format. This was done by importing the Card component into the Project Section component, which passed the data down as props. I then also ensured they looked good on mobile phones by having each project on their own column so they weren't squished. Something not asked for by Meta, but something I wanted to do as it further improved my Chakra UI implementation and general documentation researching skills.

### Contact me section

The section I found most difficult to correctly implement as I had to use both Formik and Yup for the first time. The form now has various validation checks such as requiring an email format in the email input and at least 25 characters for the message box.

## Installation

To run the project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/acktreptow/react-portfolio-page.git`
2. Navigate to the project directory: `cd react-portfolio-page`
3. Type npm start into the command line.

## Future Enhancements

There will be no more updates unless something unexpected occurs. As far as I'm concerned, now that the portfolio page incorporates responsive design, it is feature complete.

## Contact

If you have any questions or feedback, feel free to reach out to me at acktreptow@gmail.com
