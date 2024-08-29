const Location = () => {
  return (
    <div className="bg-[#FFF7F7]">
      <div className="max-w-[1360px] mx-auto py-[50px] px-2 lg:px-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.516092394622!2d90.3627763!3d23.8066807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c709b35123df%3A0x6b77ed6f8ff908b5!2sSuper%20OYO%20Prafula%20Devi%20Near%20Rajarhat%20Chowmatha!5e0!3m2!1sen!2sbd!4v1659270734142!5m2!1sen!2sbd"
          width="100%"
          height={500}
          loading="lazy"
          className="border-0"
        ></iframe>
      </div>
    </div>
  );
};

export default Location;
