import React from 'react';

const Calendly = () => {
    const name = "Vicente Ferreyra";
    const email = "vfa.1998@gmail.com";
    const text = "Me encantaria tener una cita contigo!";
    return (
    <div style={{ height: "800px" }}>
      <iframe
        src={`https://calendly.com/ignaciomonzalvo?name=${name}&email=${email}&a1=${text}`}
        width="100%"
        height="100%"
        frameborder="0"
      ></iframe>
    </div>
  );
};

export default Calendly;