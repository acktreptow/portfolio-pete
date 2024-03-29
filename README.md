# React Portfolio Page

My final project for the 'Advanced React' chapter of Meta's Frontend Developer course. To receive the certification, I had to create a portfolio page for a fictional client named Pete.

## Technologies Used:

- React
- Chakra UI
- Formik
- Yup

## Project Overview

The application has a header, landing page, projects section and contact form.

Overall, this was a very tough but equally fulfilling app to complete due to my inexperience with these more advanced technologies. But I now have significant experience in them, which then allowed me to take this portfolio page beyond the required specifications and turn into a much stronger application.

For example, I delved into Chakra's documentation to figure out how to implement responsive design despite Meta not requiring this. I was successful, resulting in the header, project section and contact form looking great on screens smaller than 768px.

Below is also some more granular information about each section.

### Header

The header had to contain external links to social media accounts and internal links to other sections of the page that would scroll smoothly to them when clicked. For extra credit, I implemented a show-hide animation depending on the scroll direction.

### Landing Page

This was the most basic section and therefore easiest to complete. There's just an image and a short introduction.

### Projects Section

Pete's projects had to display in a 2x2 grid format. I did this by importing the Card component into the Project Section component, which passed the data down as props. I then also ensured they looked good on mobile phones by having each project in their own column. This wasn't asked for by Meta, but something I wanted to do as it further improved my Chakra UI implementation and general documentation researching skills.

### Contact Me Section

The most difficult section to implement as I had to use both Formik and Yup for the first time, but I was successful! The controlled form has various validation checks such as requiring an email format in the email input and at least 25 characters for the message box.

## Installation

To run the project locally, follow these steps:

1. Clone the repository (for Git): `git clone https://github.com/acktreptow/portfolio-pete.git`
2. Navigate to the project directory: `cd portfolio-pete`
3. Type `npm i` into the command line to ensure all dependencies are installed
4. Type `npm start` into the command line.

## Future Enhancements

Now that the portfolio page incorporates responsive design, it is feature complete.

## Contact

If you have any questions or feedback, please reach out to me at [alex@treptow.dev](mailto:alex@treptow.dev)
