"use client"
import { useState } from "react";
import emailjs from "@emailjs/browser"
async function getStaticProps() {
    const serviceid = process.env.NEXT_PUBLIC_SERVICE_ID ;
    const templateid = process.env.NEXT_PUBLIC_TEMPLATE_ID;
    const publickey = process.env.NEXT_PUBLIC_PUBLIC_KEY ;
    const data = {serviceid, templateid, publickey}
    // ...
    // console.log('The Service id is : ', serviceid);
    // console.log('The template id is : ', templateid);
    // console.log('The public key is : ', publickey);
    return data;
}
const dataofenv = await getStaticProps()
console.log('THe data of env is : ', dataofenv);

const contactdata = [
    {
        type: "text",
        name: 'name',
        placeholder: 'Enter your name',
        label: 'Name'
    },
    {
        type: "email",
        name: 'email',
        placeholder: 'Enter your email',
        label: 'Email'
    },
    {
        type: "tel",
        name: 'contact',
        placeholder: 'Enter your phone number',
        label: 'Contact Number'
    }
]

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        contact: "",
        work: "",
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        console.log(formData);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.name && formData.email && formData.contact && formData.work) {
            emailjs.send(`${dataofenv.serviceid}`, `${dataofenv.templateid}`, {
                from_name: formData.name,
                to_name: "Waxwing",
                from_email: formData.email,
                message: formData.work
            },
            `${dataofenv.publickey}`
        ).then(() => {
            console.log("Form Submitted:", formData);
            setSubmitted(true);
            setTimeout(() => setSubmitted(false), 3000);
            setFormData({ name: "", email: "", contact: "", work: "" });
                // alert("Thank you, I will get back to you soon.")
            }, (error) => {
                console.log(error)
                alert("Something went wrong.")
            })
        } 
        else {
            alert("Please fill out all fields!");
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-[#020316] via-[#010312] to-[#000211] py-20" id="Form">
            <div className="bg-[#0f172a] p-10 rounded-2xl shadow-2xl w-full max-w-lg">
                <h2 className="text-4xl font-bold text-[aqua] text-center mb-6 drop-shadow">For Message</h2>

                {submitted && (
                    <p className="text-[#7fffd4] text-center mb-4 font-medium">Message Sent Successfully!</p>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    {contactdata.map((data, index) => (
                        <div key={index}>
                            <label className="block text-white mb-2 text-base font-medium">{data.label}</label>
                            <input
                                type={data.type}
                                name={data.name}
                                value={formData[data.name]}
                                onChange={handleChange}
                                className="w-full px-5 py-3 bg-[#1e293b] text-white border border-[#334155] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7fffd4] placeholder-gray-400"
                                placeholder={data.placeholder}
                                required
                            />
                        </div>
                    ))}

                    <div>
                        <label className="block text-white mb-2 text-base font-medium">Related Work</label>
                        <textarea
                            name="work"
                            value={formData.work}
                            onChange={handleChange}
                            rows="5"
                            className="w-full px-5 py-3 bg-[#1e293b] text-white border border-[#334155] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7fffd4] placeholder-gray-400"
                            placeholder="Describe the work you need"
                            required
                        ></textarea>
                    </div>

                    {/* bg-gradient-to-r from-[#7fffd4] to-[#87f5fb] */}
                    <button
                        type="submit"
                        className="w-full bg-[aqua] text-black font-semibold py-3 rounded-lg hover:brightness-110 transition duration-300 text-lg"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
