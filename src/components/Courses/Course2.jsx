import React, { useEffect } from "react";
import bg from '../../assets/course2.jpg';
import AOS from "aos";
import "aos/dist/aos.css";


const Course2 = () => {

     useEffect(() => {
        AOS.init({
          duration: 800,
          once: true,
        });
      }, []);
    const topics = [
        {
            id: "01",
            title: "Basics of Computer Networks",
            points: [
                "Network types (LAN, WAN, MAN)",
                "OSI model overview",
                "Protocols and ports",
            ],
        },
        {
            id: "02",
            title: "IP Addressing & Subnetting",
            points: [
                "IPv4 structure",
                "Subnetting with examples",
                "Public vs private IPs",
            ],
        },
        {
            id: "03",
            title: "Network Devices & Cabling",
            points: [
                "Routers, switches, hubs",
                "Ethernet types and cables",
                "Intro to wireless networking",
            ],
        },
        {
            id: "04",
            title: "Routing & Switching Basics",
            points: [
                "Static vs dynamic routing",
                "Switch port configuration",
                "VLAN introduction",
            ],
        },
        {
            id: "05",
            title: "DNS, DHCP & NAT",
            points: [
                "How name resolution works",
                "DHCP setup & lease process",
                "NAT and PAT examples",
            ],
        },
        {
            id: "06",
            title: "Troubleshooting & Tools",
            points: [
                "Ping, tracert, ipconfig, nslookup",
                "Common connectivity issues",
                "Basic Wireshark overview",
            ],
        },
    ];

    return (
        <div className="max-w-7xl mx-auto p-6 bg-white rounded-lg shadow">
            {/* Header */}
            <div className="bg-[#E6F0F8]  bg-cover bg-center rounded-t-lg p-6 flex flex-col gap-4" style={{ backgroundImage: `url(${bg})` }} data-aos="fade-down">
                <div className="flex items-center gap-4">
                    <div className="bg-green-700 text-white px-4 py-2 rounded shadow text-xl font-bold"  >
                        02
                    </div>
                    <div>
                        <h2 className="text-xl md:text-2xl font-bold text-[#003366]">
                            IT Support for Beginners
                        </h2>
                        <p className="text-gray-600">
                            Learn the fundamentals of networking and prepare for the globally recognized CCNA certification.

                        </p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">
                        3 months
                    </span>
                    <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">
                        Fresher
                    </span>
                </div>
            </div>


            {/* Topics inside one box */}
            <div className="border border-t-0 border-[#cbd1cc] rounded-b-lg p-6">
                <div className="grid md:grid-cols-3 gap-0">
                    {topics.map((topic, index) => (
                        <div
                            key={topic.id}
                            data-aos="fade-up"
                            className={`flex flex-col gap-2 p-6 border-gray-200 ${index < 3 ? 'border-b' : ''
                                } ${index % 3 !== 2 ? 'md:border-r' : ''
                                } ${index >= 3 ? 'md:border-b-0' : ''
                                }`}
                        >
                            <h3 className="text-4xl font-bold text-[#003366]">{topic.id}</h3>
                            <h4 className="text-lg font-semibold">{topic.title}</h4>
                            <ul className="list-disc list-inside text-gray-700">
                                {topic.points.map((point, idx) => (
                                    <li key={idx}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Course2;
