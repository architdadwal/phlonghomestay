import React, { useMemo, useState } from "react";
import { NavLink, Routes, Route, Link, useLocation } from "react-router-dom";

const WA = "916909943931";
const photos = {
  hero: "/images/dawki-river-view.jpeg",
  exterior: "/images/exterior-front-day.jpeg",
  night: "/images/room-blue-bed.jpeg",
  room2: "/images/room-white-bed.jpeg",
  bath: "/images/washroom-clean.jpeg",
  river: "/images/dawki-river-hills.jpeg",
  bridge: "/images/dawki-river-bridge.jpeg",
  outer: "/public/images/room-fan.jpeg",
  road3: "/public/images/approach-road.jpeg",
  road4: "/public/images/road-flowers.jpeg",
  exterior2: "/public/images/exterior-night-lights.jpeg"
};
const gallery = [
  ["Property in the green", "/images/exterior-garden.jpeg", "Exterior"],
  ["A warm welcome", "/images/exterior-front-day.jpeg", "Exterior"],
  ["Evenings at Pohlong", "/images/exterior-night-front.jpeg", "Exterior"],
  ["A restful room", "/images/room-blue-bed.jpeg", "Rooms"],
  ["Room details", "/images/room-white-bed.jpeg", "Rooms"],
  ["Comfortable stay", "/images/room-wide.jpeg", "Rooms"],
  ["Fresh and simple", "/images/washroom-clean.jpeg", "Washroom"],
  ["Dawki River", "/images/dawki-river-view.jpeg", "Around us"],
  ["The river bridge", "/images/dawki-river-bridge.jpeg", "Around us"],
  ["Green surroundings", "/images/exterior-garden-front.jpeg", "Exterior"],
  ["A look outside", "/images/road-flowers.jpeg", "Around us"],
  ["Riverside landscape", "/images/dawki-river-hills.jpeg", "Around us"],
];
function Icon({ name, size = 18 }) {
  const paths = {
    pin: (
      <>
        <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    bed: (
      <>
        <path d="M3 18v-7m18 7v-7M3 14h18M5 14V8a2 2 0 0 1 2-2h3a3 3 0 0 1 3 3v5m0-3h6a2 2 0 0 1 2 2v1" />
      </>
    ),
    users: (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="10" cy="7" r="4" />
        <path d="M20 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
    car: (
      <>
        <path d="m5 17-1 3m15-3 1 3M5 17h14l-1.5-7h-11L5 17Z" />
        <path d="M7 10 9 5h6l2 5M3 14h2m14 0h2" />
        <circle cx="7" cy="17" r="1" />
        <circle cx="17" cy="17" r="1" />
      </>
    ),
    hot: (
      <>
        <path d="M8 3c0 3-3 3-3 6s3 3 3 6m5-12c0 3-3 3-3 6s3 3 3 6m5-12c0 3-3 3-3 6s3 3 3 6" />
      </>
    ),
    sun: (
      <>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
      </>
    ),
    arrow: (
      <>
        <path d="M5 12h14m-7-7 7 7-7 7" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    menu: (
      <>
        <path d="M4 6h16M4 12h16M4 18h16" />
      </>
    ),
  };
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
function WhatsApp({ children = "Chat on WhatsApp", className = "" }) {
  return (
    <a
      className={`btn btn-wa ${className}`}
      href={`https://wa.me/${WA}`}
      target="_blank"
      rel="noreferrer"
    >
      <span className="wa-mark">◉</span>
      {children}
    </a>
  );
}
function Header() {
  const [open, setOpen] = useState(false);
  const loc = useLocation();
  React.useEffect(() => {
    setOpen(false);
    window.scrollTo(0, 0);
  }, [loc.pathname]);
  return (
    <header className="header">
      <div className="nav-wrap">
        <Link to="/" className="brand">
          <span className="brand-mark">P</span>
          <span>
            <b>Pohlong</b>
            <small>HOMESTAY · DAWKI</small>
          </span>
        </Link>
        <button
          className="mobile-menu"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          <Icon name="menu" />
        </button>
        <nav className={open ? "nav open" : "nav"}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/rooms">Rooms & Rates</NavLink>
          <NavLink to="/experiences">Experiences</NavLink>
          <NavLink to="/gallery">Gallery</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
        <Link className="btn btn-dark nav-book" to="/book">
          Check availability <Icon name="arrow" size={16} />
        </Link>
      </div>
    </header>
  );
}
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <Link to="/" className="brand brand-light">
            <span className="brand-mark">P</span>
            <span>
              <b>Pohlong</b>
              <small>HOMESTAY · DAWKI</small>
            </span>
          </Link>
          <p>
            A simple, welcoming stay close to the clear waters and green
            landscapes of Dawki, Meghalaya.
          </p>
        </div>
        <div>
          <b>Explore</b>
          <Link to="/rooms">Rooms & rates</Link>
          <Link to="/experiences">Experiences</Link>
          <Link to="/gallery">Gallery</Link>
        </div>
        <div>
          <b>Find us</b>
          <span>Darrang Village, West Jaintia Hills, Meghalaya</span>
          <span>WhatsApp: +91 69099 43931</span>
          <span>Dawki River · approx. 150 m</span>
        </div>
      </div>
      <div className="copyright">
        © {new Date().getFullYear()} Pohlong Homestay. Made for slow stays and
        river days.
      </div>
    </footer>
  );
}
function BookingStrip() {
  return (
    <div className="booking-strip">
      <div>
        <span className="eyebrow">PLAN YOUR STAY</span>
        <b>Ready for a riverside escape?</b>
        <small>Two rooms · Up to 6 guests · ₹1,500 per room / night</small>
      </div>
      <Link to="/book" className="btn btn-dark">
        Enquire about your dates <Icon name="arrow" size={16} />
      </Link>
    </div>
  );
}
function Home() {
  return (
    <>
      <section
        className="hero"
        style={{
          backgroundImage: `linear-gradient(90deg,rgba(9,34,27,.76),rgba(9,34,27,.12)),url(${photos.hero})`,
        }}
      >
        <div className="hero-inner">
          <span className="pill-light">A LITTLE CLOSER TO NATURE</span>
          <h1>
            Your Dawki escape
            <br />
            <em>starts here.</em>
          </h1>
          <p>
            Find a warm, easygoing stay in Darrang Village — just a short stroll
            from the Dawki River.
          </p>
          <div className="hero-actions">
            <Link to="/book" className="btn btn-cream">
              Plan your stay <Icon name="arrow" size={17} />
            </Link>
            <Link to="/gallery" className="text-link light-link">
              Explore the homestay ↗
            </Link>
          </div>
          <div className="hero-proof">
            <span>
              <Icon name="pin" /> Darrang Village, Meghalaya
            </span>
            <span>
              <i /> Dawki River · approx. 150 m
            </span>
          </div>
        </div>
        <div className="hero-note">RIVER DAYS, RESTFUL NIGHTS</div>
      </section>
      <section className="quick-facts wrap">
        <div>
          <span className="fact-icon">
            <Icon name="bed" />
          </span>
          <b>2 rooms</b>
          <small>Up to 6 guests</small>
        </div>
        <div>
          <span className="fact-icon">
            <Icon name="pin" />
          </span>
          <b>150 metres</b>
          <small>From Dawki River</small>
        </div>
        <div>
          <span className="fact-icon">
            <Icon name="car" />
          </span>
          <b>Free parking</b>
          <small>At the property</small>
        </div>
        <div>
          <span className="fact-icon">
            <Icon name="hot" />
          </span>
          <b>Everyday comfort</b>
          <small>Hot water & room heater</small>
        </div>
      </section>
      <section className="section wrap intro-grid">
        <div>
          <span className="eyebrow">WELCOME TO POHLONG</span>
          <h2>
            A relaxed base for
            <br />
            <em>your Meghalaya days.</em>
          </h2>
          <p className="lead">
            Come for the river, stay for the unhurried moments. Pohlong Homestay
            offers a comfortable base in Darrang Village, with the Dawki River
            around 150 metres away.
          </p>
          <p>
            Whether you're here for a peaceful break or a little adventure on
            the water, our homestay keeps you close to the experiences that make
            this corner of Meghalaya special.
          </p>
          <Link to="/rooms" className="under-link">
            Discover your room <Icon name="arrow" size={16} />
          </Link>
        </div>
        <div className="intro-images">
          <img
            className="intro-main"
            src={photos.road3}
            alt="Pohlong Homestay exterior in daylight"
          />
          <img
            className="intro-small"
            src={photos.exterior}
            alt="Guest room at Pohlong Homestay"
          />
          <span className="image-caption">
            A simple stay, surrounded by green.
          </span>
        </div>
      </section>
      <section
        className="river-band"
        style={{
          backgroundImage: `linear-gradient(90deg,rgba(12,48,39,.82),rgba(12,48,39,.28)),url(${photos.bridge})`,
        }}
      >
        <div className="wrap river-content">
          <span className="eyebrow light-eyebrow">
            THE RIVER IS JUST A SHORT WALK AWAY
          </span>
          <h2>
            Let the river
            <br />
            <em>set the pace.</em>
          </h2>
          <p>
            Spend your days exploring Dawki and Shnongpdeng, then return to a
            comfortable room and a slower evening.
          </p>
          <Link to="/experiences" className="btn btn-cream">
            Explore experiences <Icon name="arrow" size={16} />
          </Link>
        </div>
      </section>
      <section className="section wrap">
        <div className="section-head">
          <div>
            <span className="eyebrow">STAY COMFORTABLY</span>
            <h2>
              Everything you need
              <br />
              <em>to feel at ease.</em>
            </h2>
          </div>
          <Link to="/rooms" className="under-link">
            See rooms & rates <Icon name="arrow" size={16} />
          </Link>
        </div>
        <div className="amenity-grid">
          {[
            ["car", "Free parking", "Convenient parking at the property"],
            ["hot", "Hot water", "Hot water available for your comfort"],
            ["sun", "Room heater", "A warmer room on cooler evenings"],
            [
              "users",
              "Meals available",
              "Breakfast and dinner at extra charges",
            ],
          ].map(([ic, t, d]) => (
            <div className="amenity" key={t}>
              <Icon name={ic} size={23} />
              <b>{t}</b>
              <p>{d}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="section soft">
        <div className="wrap section-head">
          <div>
            <span className="eyebrow">A GLIMPSE OF POHLONG</span>
            <h2>
              Little moments,
              <br />
              <em>real places.</em>
            </h2>
          </div>
          <Link to="/gallery" className="under-link">
            View all photos <Icon name="arrow" size={16} />
          </Link>
        </div>
        <div className="home-gallery wrap">
          <img src={photos.road4} alt="Homestay at night" />
          <img src={photos.exterior2} alt="Canopy bed in room" />
          <img src={photos.river} alt="Dawki river landscape" />
        </div>
      </section>
      <BookingStrip />
    </>
  );
}
function Rooms() {
  return (
    <>
      <PageHero
        tag="ROOMS & RATES"
        title={
          <>
            A comfortable place
            <br />
            <em>to come back to.</em>
          </>
        }
        desc="Choose from two rooms at Pohlong Homestay, with space for up to six guests across both rooms."
        image={photos.room}
      />
      <section className="section wrap">
        <div className="room-layout">
          <div>
            <div className="room-card">
              <img
                src="/images/room-blue-bed.jpeg"
                alt="Room with double bed and wooden furniture"
              />
              <div className="room-info">
                <div className="room-title">
                  <div>
                    <span className="eyebrow">ROOM 01</span>
                    <h2>Comfortable Double Room</h2>
                  </div>
                  <strong>
                    ₹1,500 <small>/ night</small>
                  </strong>
                </div>
                <p>
                  A welcoming room with a comfortable bed, wooden furnishings
                  and a relaxed homestay feel.
                </p>
                <div className="room-tags">
                  <span>
                    <Icon name="users" /> Shared guest capacity
                  </span>
                  <span>
                    <Icon name="sun" /> Heater available
                  </span>
                  <span>
                    <Icon name="hot" /> Hot water
                  </span>
                </div>
              </div>
            </div>
            <div className="room-card">
              <img
                src="/images/washroom-original.jpeg"
                alt="Room with wooden canopy bed"
              />
              <div className="room-info">
                <div className="room-title">
                  <div>
                    <span className="eyebrow">ROOM 02</span>
                    <h2>Canopy Double Room</h2>
                  </div>
                  <strong>
                    ₹1,500 <small>/ night</small>
                  </strong>
                </div>
                <p>
                  A cosy room with a wooden canopy bed and a simple, restful
                  atmosphere.
                </p>
                <div className="room-tags">
                  <span>
                    <Icon name="users" /> Shared guest capacity
                  </span>
                  <span>
                    <Icon name="sun" /> Heater available
                  </span>
                  <span>
                    <Icon name="hot" /> Hot water
                  </span>
                </div>
              </div>
            </div>
          </div>
          <aside className="rate-card">
            <span className="eyebrow">ROOM RATE</span>
            <div className="rate">
              ₹1,500 <small>/ room / night</small>
            </div>
            <p>Book one room or enquire about both rooms together.</p>
            <div className="rate-line">
              <span>Number of rooms</span>
              <b>2 available</b>
            </div>
            <div className="rate-line">
              <span>Maximum guests</span>
              <b>Up to 6</b>
            </div>
            <div className="rate-line">
              <span>Extra mattress</span>
              <b>Available</b>
            </div>
            <div className="rate-line">
              <span>Parking</span>
              <b>Free</b>
            </div>
            <Link to="/book" className="btn btn-dark full">
              Enquire to book <Icon name="arrow" size={16} />
            </Link>
            <small className="muted">
              Final availability and total price will be confirmed by the
              homestay.
            </small>
          </aside>
        </div>
      </section>
      <section className="section soft">
        <div className="wrap">
          <span className="eyebrow">GOOD TO KNOW</span>
          <h2>
            Comforts that make
            <br />
            <em>the stay easier.</em>
          </h2>
          <div className="amenity-grid">
            {[
              ["car", "Free parking", "On-site parking available"],
              ["hot", "Hot water", "Available for guests"],
              ["sun", "Room heater", "Available in the rooms"],
              [
                "users",
                "Breakfast & dinner",
                "Available at additional charges",
              ],
            ].map((x) => (
              <div className="amenity" key={x[1]}>
                <Icon name={x[0]} size={23} />
                <b>{x[1]}</b>
                <p>{x[2]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <BookingStrip />
    </>
  );
}
function PageHero({ tag, title, desc, image }) {
  return (
    <section
      className="page-hero"
      style={{
        backgroundImage: `linear-gradient(90deg,rgba(13,43,35,.78),rgba(13,43,35,.18)),url(${image})`,
      }}
    >
      <div className="wrap">
        <span className="eyebrow light-eyebrow">{tag}</span>
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
    </section>
  );
}
function Experiences() {
  const things = [
    [
      "Boating",
      "Take in the river scenery from the water.",
      "/images/dawki-river-view.jpeg",
    ],

    [
      "Cliff jumping",
      "For guests looking for an extra dose of adventure.",
      "/images/dawki-river-hills.jpeg",
    ],
    [
      "Kayaking",
      "Paddle through the beautiful Dawki and Shnongpdeng river setting.",
      "/images/exterior-front-day.jpeg",
    ],
    [
      "Swimming",
      "Enjoy time in and around the river when conditions allow.",
      "/images/swimming.jpeg",
    ],
  ];
  return (
    <>
      <PageHero
        tag="EXPERIENCES NEARBY"
        title={
          <>
            A little adventure.
            <br />
            <em>A lot of nature.</em>
          </>
        }
        desc="Make the most of your time around Dawki, with river activities and nearby village experiences."
        image={photos.river}
      />
      <section className="section wrap">
        <div className="section-head">
          <div>
            <span className="eyebrow">MAKE A DAY OF IT</span>
            <h2>
              Find your kind
              <br />
              <em>of river day.</em>
            </h2>
          </div>
          <p className="section-aside">
            Activities are subject to local operators, weather, water levels and
            safety conditions. Please confirm arrangements locally.
          </p>
        </div>
        <div className="experience-grid">
          {things.map(([t, d, i], n) => (
            <article className="experience-card" key={t}>
              <div className="experience-img">
                <img src={i} alt={t} />
                <span>0{n + 1}</span>
              </div>
              <div>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="section soft">
        <div className="wrap location-grid">
          <div>
            <span className="eyebrow">WELL PLACED FOR EXPLORING</span>
            <h2>
              Close to the places
              <br />
              <em>you came to see.</em>
            </h2>
            <p className="lead">
              Pohlong Homestay is in Darrang Village, West Jaintia Hills, with
              easy access to well-known spots around Dawki.
            </p>
            <div className="distance-list">
              <div>
                <b>Dawki River</b>
                <strong>Approx. 150 m</strong>
              </div>
              <div>
                <b>Shnongpdeng Village</b>
                <strong>Approx. 1 km</strong>
              </div>
              <div>
                <b>India–Bangladesh border</b>
                <strong>Approx. 5 km</strong>
              </div>
            </div>
          </div>
          <img src={photos.bridge} alt="Bridge over Dawki river" />
        </div>
      </section>
      <BookingStrip />
    </>
  );
}
function Gallery() {
  const [filter, setFilter] = useState("All");
  const filters = ["All", "Exterior", "Rooms", "Washroom", "Around us"];
  const shown = gallery.filter((x) => filter === "All" || x[2] === filter);
  return (
    <>
      <PageHero
        tag="PHOTO GALLERY"
        title={
          <>
            A closer look at
            <br />
            <em>Pohlong Homestay.</em>
          </>
        }
        desc="Browse the rooms, the property and the beautiful surroundings captured in our own photographs."
        image={photos.exterior}
      />
      <section className="section wrap">
        <div className="gallery-toolbar">
          <div>
            <span className="eyebrow">THE PHOTO COLLECTION</span>
            <h2>See it for yourself.</h2>
          </div>
          <div className="filters">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={filter === f ? "active" : ""}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
        <div className="gallery-grid">
          {shown.map(([t, s, c], i) => (
            <figure key={s}>
              <img src={s} alt={t} />
              <figcaption>
                <b>{t}</b>
                <span>{c}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
      <BookingStrip />
    </>
  );
}
function Book() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    checkin: "",
    checkout: "",
    guests: "2",
    rooms: "1",
    notes: "",
  });
  const [sent, setSent] = useState(false);
  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const nights = useMemo(() => {
    if (!form.checkin || !form.checkout) return 0;
    return Math.max(
      0,
      Math.round((new Date(form.checkout) - new Date(form.checkin)) / 86400000)
    );
  }, [form.checkin, form.checkout]);
  const total = nights * Number(form.rooms) * 1500;
  const valid =
    form.name.trim() &&
    form.phone.trim() &&
    form.checkin &&
    form.checkout &&
    nights > 0;
  function submit(e) {
    e.preventDefault();
    if (!valid) return;
    const msg = `Hello Pohlong Homestay! I'd like to enquire about a stay.%0A%0AName: ${encodeURIComponent(
      form.name
    )}%0APhone: ${encodeURIComponent(form.phone)}%0ACheck-in: ${form.checkin
      }%0ACheck-out: ${form.checkout}%0ANights: ${nights}%0AGuests: ${form.guests
      }%0ARooms: ${form.rooms
      }%0AEstimated room total: ₹${total}%0AAdditional requirements: ${encodeURIComponent(
        form.notes || "None"
      )}%0A%0APlease confirm availability and final pricing.`;
    setSent(true);
    window.open(
      `https://wa.me/${WA}?text=${msg}`,
      "_blank",
      "noopener,noreferrer"
    );
  }
  return (
    <>
      <PageHero
        tag="DIRECT ENQUIRY"
        title={
          <>
            Your stay is just
            <br />
            <em>a message away.</em>
          </>
        }
        desc="Share your dates and guest details. We'll open WhatsApp with your enquiry ready to send."
        image={photos.night}
      />
      <section className="section wrap booking-page">
        <div className="booking-intro">
          <span className="eyebrow">BOOK DIRECT WITH US</span>
          <h2>
            Let's plan your
            <br />
            <em>Dawki stay.</em>
          </h2>
          <p>
            Fill in the details and send your enquiry directly to Pohlong
            Homestay on WhatsApp. We'll get back to you to confirm availability.
          </p>
          <div className="booking-assurance">
            <span>
              <Icon name="check" /> No advance payment through this form
            </span>
            <span>
              <Icon name="check" /> Direct contact with the homestay
            </span>
            <span>
              <Icon name="check" /> Final confirmation by WhatsApp
            </span>
          </div>
          <div className="contact-mini">
            <b>Prefer to message us directly?</b>
            <a href={`https://wa.me/${WA}`} target="_blank" rel="noreferrer">
              +91 69099 43931 ↗
            </a>
          </div>
        </div>
        <form className="booking-form" onSubmit={submit}>
          <div className="form-heading">
            <div>
              <span className="eyebrow">BOOKING ENQUIRY</span>
              <h3>Tell us about your trip</h3>
            </div>
            <span className="secure-label">Direct · Free enquiry</span>
          </div>
          <div className="form-grid">
            <label className="wide">
              Full name
              <input
                name="name"
                value={form.name}
                onChange={update}
                placeholder="Your name"
                required
              />
            </label>
            <label>
              Phone / WhatsApp
              <input
                name="phone"
                type="tel"
                value={form.phone}
                onChange={update}
                placeholder="Your mobile number"
                required
              />
            </label>
            <label>
              Number of guests
              <select name="guests" value={form.guests} onChange={update}>
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <option key={n} value={n}>
                    {n} {n === 1 ? "guest" : "guests"}
                  </option>
                ))}
              </select>
            </label>
            <label>
              Check-in
              <input
                name="checkin"
                type="date"
                min={new Date().toISOString().slice(0, 10)}
                value={form.checkin}
                onChange={update}
                required
              />
            </label>
            <label>
              Check-out
              <input
                name="checkout"
                type="date"
                min={form.checkin || new Date().toISOString().slice(0, 10)}
                value={form.checkout}
                onChange={update}
                required
              />
            </label>
            <label>
              Rooms
              <select name="rooms" value={form.rooms} onChange={update}>
                {[1, 2].map((n) => (
                  <option key={n} value={n}>
                    {n} {n === 1 ? "room" : "rooms"}
                  </option>
                ))}
              </select>
            </label>
            <label className="wide">
              Special requests <small>(optional)</small>
              <textarea
                name="notes"
                value={form.notes}
                onChange={update}
                placeholder="Extra mattress, meal requirements, arrival time..."
                rows="3"
              />
            </label>
          </div>
          <div className="estimate">
            <div>
              <span>Estimated room total</span>
              <small>
                {nights > 0
                  ? `${nights} night(s) × ${form.rooms} room(s) × ₹1,500`
                  : "Select dates to calculate"}
              </small>
            </div>
            <b>{nights > 0 ? `₹${total.toLocaleString("en-IN")}` : "—"}</b>
          </div>
          <p className="form-disclaimer">
            Estimate excludes meals and any other extras. Availability and final
            amount will be confirmed by the homestay.
          </p>
          <button className="btn btn-wa full" type="submit" disabled={!valid}>
            Send enquiry on WhatsApp <Icon name="arrow" size={16} />
          </button>
          {sent && (
            <div className="success-note">
              <Icon name="check" /> WhatsApp has been opened with your details.
              Please tap <b>Send</b> in WhatsApp. We'll contact you soon.
            </div>
          )}
        </form>
      </section>
    </>
  );
}
function Contact() {
  return (
    <>
      <PageHero
        tag="CONTACT & LOCATION"
        title={
          <>
            We'd love to
            <br />
            <em>welcome you.</em>
          </>
        }
        desc="Have a question about rooms, dates or getting here? Reach out directly."
        image={photos.exterior}
      />
      <section className="section wrap contact-grid">
        <div>
          <span className="eyebrow">GET IN TOUCH</span>
          <h2>
            Let's make your
            <br />
            <em>visit easy.</em>
          </h2>
          <p className="lead">
            For room availability, pricing and meal enquiries, contact us
            directly on WhatsApp.
          </p>
          <WhatsApp>Message Pohlong Homestay</WhatsApp>
          <div className="contact-details">
            <div>
              <span className="fact-icon">
                <Icon name="pin" />
              </span>
              <div>
                <b>Address</b>
                <p>Darrang Village, West Jaintia Hills, Meghalaya, India</p>
              </div>
            </div>
            <div>
              <span className="fact-icon">
                <Icon name="users" />
              </span>
              <div>
                <b>WhatsApp / Phone</b>
                <p>+91 69099 43931</p>
              </div>
            </div>
            <div>
              <span className="fact-icon">
                <Icon name="pin" />
              </span>
              <div>
                <b>Nearby</b>
                <p>
                  Dawki River · approx. 150 m<br />
                  Shnongpdeng · approx. 1 km
                  <br />
                  India–Bangladesh border · approx. 5 km
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-photo">
          <img
            src={photos.exterior}
            alt="Pohlong Homestay in its green surroundings"
          />
          <div className="photo-note">
            <b>Pohlong Homestay</b>
            <span>Darrang Village · Meghalaya</span>
          </div>
        </div>
      </section>
      <section className="section soft">
        <div className="wrap location-grid">
          <div>
            <span className="eyebrow">NEAR THE DAWKI RIVER</span>
            <h2>
              Find us in
              <br />
              <em>Darrang Village.</em>
            </h2>
            <p>
              We're approximately 150 metres from the Dawki River, around 1
              kilometre from Shnongpdeng Village and about 5 kilometres from the
              India–Bangladesh border.
            </p>
            <a
              className="under-link"
              href="https://www.google.com/maps/search/?api=1&query=Darrang+Village+West+Jaintia+Hills+Meghalaya"
              target="_blank"
              rel="noreferrer"
            >
              Open directions in Google Maps <Icon name="arrow" size={16} />
            </a>
          </div>
          <div className="map-placeholder">
            <Icon name="pin" size={34} />
            <b>Darrang Village</b>
            <span>West Jaintia Hills, Meghalaya</span>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Darrang+Village+West+Jaintia+Hills+Meghalaya"
              target="_blank"
              rel="noreferrer"
            >
              Get directions ↗
            </a>
          </div>
        </div>
      </section>
      <BookingStrip />
    </>
  );
}
export default function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/book" element={<Book />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <a
        className="floating-wa"
        href={`https://wa.me/${WA}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Pohlong Homestay on WhatsApp"
      >
        ◉
      </a>
    </>
  );
}
