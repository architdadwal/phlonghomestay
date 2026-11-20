# Pohlong Homestay — React website

A responsive multi-page Vite + React website using the property photographs supplied in the conversation. No external stock photography is used.

## Run locally
1. Install Node.js 18 or newer.
2. In this folder run `npm install`.
3. Run `npm run dev`.
4. Create a production build with `npm run build`.

## Pages
- Home
- Rooms & Rates
- Experiences
- Gallery
- Contact
- Booking enquiry

## Booking
The booking form calculates an indicative room total at ₹1,500 per room per night and opens WhatsApp to +91 8872649119 with the guest's details prefilled. The guest must tap Send in WhatsApp. The homestay confirms availability and final pricing directly.

## Update
- Photos are in `public/images/`.
- WhatsApp number is in `src/App.jsx` (`WA`).
- Room rate is currently set to ₹1,500 per room per night.
- Location distances and facilities are based on details supplied by the property owner.
- The map link uses a general Darrang Village search, not a verified pin. Replace it with the exact Google Maps share link when available.
