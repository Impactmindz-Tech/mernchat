import React from "react";
import Input from "../../../components/input";

const Dashboard = () => {
  const contact = [
    {
      name: "john",
      status: "Aailable",
      img: "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg",
    },
    {
      name: "marry",
      status: "Aailable",
      img: "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg",
    },
    {
      name: "alexander",
      status: "Aailable",
      img: "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg",
    },
    {
      name: "adam",
      status: "Aailable",
      img: "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg",
    },
    {
      name: "alex",
      status: "Aailable",
      img: "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg",
    },
    {
      name: "samar",
      status: "Aailable",
      img: "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg",
    },
  ];
  return (
    <div className="w-screen flex">
      <div className="w-[25%] border border-[#ccc] h-screen bg-secondary">
        <div className="flex items-center justify-center my-8">
          <div className="border border-primary p-[2px] rounded-full">
            <img className="rounded-full" src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" alt="" width={75} height={75} />
          </div>
          <div className="ml-6">
            <h3 className="text-2xl">Turorial dev</h3>
            <p className="text-lg font-light">My Account</p>
          </div>
        </div>
        <hr />
        <div className="mx-14 mt-10">
          <div className="text-primary text-lg">message</div>
          <div>
            {contact?.map((item, index) => {
              return (
                <div key={index} className="flex items-center py-6 border-b border-[#ccc] cursor-pointer">
                  <div className="border border-primary  rounded-full">
                    <img className="rounded-full" src={item?.img} alt="" width={60} height={60} />
                  </div>
                  <div className="ml-6">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-sm font-light">{item.status}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="w-[50%] bg-white h-screen flex flex-col  items-center">
        <div className="w-[75%] bg-secondary h-[80px] mt-14 rounded-full">
          <div className="flex items-center px-14 h-full">
            <img className="rounded-full cursor-pointer" src={"https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"} alt="" width={60} height={60} />
            <div className="ml-6 mr-auto">
              <h3 className="text-lg">{"Alexander"}</h3>
              <p className="text-sm font-light">Online</p>
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-phone">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
              </svg>
            </div>
          </div>
        </div>
        <div className="h-[75%] w-full overflow-y-scroll border-b">
          <div className="px-10 py-14">
            <div className="max-w-[40%] mb-6 bg-secondary rounded-b-lg rounded-tr-xl p-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et porro, consequatur incidunt modi aliquam beatae animi? Magni vitae molestias molestiae optio cumque, harum voluptate! Dolore dicta non nemo eligendi illum?
            </div>
            <div className="text-white mb-6 p-4 max-w-[40%] bg-primary rounded-b-lg rounded-tl-xl ml-auto">Lorem ipsum dolor sit amet consectetur</div>
            <div className="max-w-[40%] mb-6 bg-secondary rounded-b-lg rounded-tr-xl p-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et porro, consequatur incidunt modi aliquam beatae animi? Magni vitae molestias molestiae optio cumque, harum voluptate! Dolore dicta non nemo eligendi illum?
            </div>
            <div className="text-white mb-6 p-4 max-w-[40%] bg-primary rounded-b-lg rounded-tl-xl ml-auto">Lorem ipsum dolor sit amet consectetur</div>
            <div className="max-w-[40%] mb-6 bg-secondary rounded-b-lg rounded-tr-xl p-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et porro, consequatur incidunt modi aliquam beatae animi? Magni vitae molestias molestiae optio cumque, harum voluptate! Dolore dicta non nemo eligendi illum?
            </div>
            <div className="text-white mb-6 p-4 max-w-[40%] bg-primary rounded-b-lg rounded-tl-xl ml-auto">Lorem ipsum dolor sit amet consectetur</div>
            <div className="max-w-[40%] mb-6 bg-secondary rounded-b-lg rounded-tr-xl p-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et porro, consequ</div>
          </div>
        </div>
        <div className="p-14 w-full flex items-center">
          <Input placeholder="Type a message... " className="w-[75%]" inputClassname="outline-none p-3 w-full border border-[#ccc] rounded-lg bg-[#fff]" />
          <div className="ml-4 pl-4 cursor-pointer bg-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-send">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M10 14l11 -11" />
              <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" />
            </svg>
          </div>
        </div>
      </div>
      <div className="w-[25%]  h-screen">
        
      </div>
    </div>
  );
};

export default Dashboard;
