import React from "react";

function Contact() {
  return (
    <div>
      <h1>Contact Details</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis
        eligendi totam ratione neque rem voluptatibus nobis natus similique
        labore esse?
      </p>

      <form>
        <input type="text" placeholder="Name" />
        <br />
        <input type="text" placeholder="Email" />
        <br />
        <textarea placeholder="Message"></textarea>
        <br />
        <button>Send</button>
      </form>
    </div>
  );
}

export default Contact;
