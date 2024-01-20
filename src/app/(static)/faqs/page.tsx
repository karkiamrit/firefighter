import React from 'react';

const FaqContent = [
    [
        {
          number: 1,
          question: "What is the purpose of the predictive fire monitoring system for firefighters in Nepal?",
          answer: "The predictive fire monitoring system is designed to anticipate potential fire outbreaks by analyzing various environmental factors. The system utilizes sensors to detect anomalies and predict areas at risk of fires in Nepal, providing firefighters with advanced warnings and real-time data.",
        },
        {
          number: 2,
          question: "How does the system predict fire-prone areas?",
          answer: "The system employs a combination of environmental sensors, weather data, and machine learning algorithms to analyze patterns and detect potential fire risks. By continuously monitoring environmental conditions, the system can identify areas susceptible to fires and provide timely alerts to firefighting teams.",
        },
        {
          number: 3,
          question: "What type of data do the sensors collect?",
          answer: "The sensors collect data on temperature, humidity, wind speed, and other environmental variables. This data is crucial for the system to assess the fire risk level in different regions and predict potential fire outbreaks.",
        },
        {
          number: 4,
          question: "Can the system provide real-time information on ongoing fires?",
          answer: "Yes, the system offers real-time monitoring of fire incidents. Through live data streaming from the sensors, firefighting teams can access up-to-the-minute information on the location and intensity of ongoing fires, enabling them to respond swiftly and effectively.",
        },
        {
          number: 5,
          question: "How does the system enhance the efficiency of firefighting operations?",
          answer: "The predictive fire monitoring system enhances firefighting efficiency by enabling proactive measures. Firefighters can pre-position resources based on the predicted fire-prone areas, reducing response time and improving overall effectiveness in tackling wildfires.",
        },
        {
          number: 6,
          question: "Is the system integrated with a centralized platform for monitoring live fire locations?",
          answer: "Yes, the system is integrated with a centralized platform that allows firefighting authorities to monitor live fire locations in real-time. This platform provides a visual representation of ongoing fire incidents, aiding in strategic decision-making and resource allocation.",
        },
        {
          number: 7,
          question: "Can the system be customized for different geographical regions in Nepal?",
          answer: "Absolutely. The system's algorithms can be customized and calibrated based on the specific environmental conditions and characteristics of different regions in Nepal. This ensures accurate predictions and tailored firefighting strategies for each area.",
        },
        {
          number: 8,
          question: "How does the system contribute to overall fire prevention efforts?",
          answer: "By predicting potential fire outbreaks and offering real-time monitoring, the system contributes significantly to fire prevention efforts. Early detection allows authorities to implement preventive measures, reducing the occurrence and impact of wildfires in Nepal.",
        },
        {
          number: 9,
          question: "Is the system accessible to local firefighting teams and authorities?",
          answer: "Yes, the system is designed to be accessible to local firefighting teams and authorities. User-friendly interfaces and mobile applications ensure that relevant parties can easily access and interpret the information provided by the system.",
        },
        {
          number: 10,
          question: "How can firefighting teams integrate this system into their operations?",
          answer: "Firefighting teams can integrate the system into their operations by collaborating with the developers and implementing the recommended protocols. Training programs and support will be provided to ensure seamless integration and effective utilization of the predictive fire monitoring system in Nepal.",
        },
      ],
];

export default function FaqFour() {
  return (
    <section className="mx-auto max-w-7xl px-2 py-10 md:px-0">
      <div>
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl first-letter:text-primary">
            Frequently Asked Questions!
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600 lg:mx-auto">
            FAQs for Firefighter System in Nepal: Predictive Fire Monitoring System
          </p>
        </div>
        <div className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-6 md:mt-16 md:grid-cols-2">
          {FaqContent.map((faqArray, index) => (
            faqArray.map((faq, subIndex) => (
              <div key={subIndex}>
                <h2 className="text-xl font-semibold text-black">{faq.question}</h2>
                <p className="mt-6 text-sm leading-6 tracking-wide text-gray-500">
                  {faq.answer}
                </p>
              </div>
            ))
          ))}
        </div>
        <p className="mt-10 text-center text-gray-600">
          Can&apos;t find what you&apos;re looking for?{' '}
          <a href="/about" title="" className="black font-semibold hover:underline">
            Contact us
          </a>
        </p>
      </div>
    </section>
  );
}