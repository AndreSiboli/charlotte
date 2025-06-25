import styles from "@/styles/pageComponents/root/Services.module.scss";
import {
  PiChurchThin,
  PiCakeThin,
  PiCalendarThin,
  PiUserSquareThin,
  PiAirplaneThin,
  PiDressThin,
} from "react-icons/pi";

export default function Services() {
  const services = [
    { name: "Wedding", icon: <PiChurchThin /> },
    { name: "Birthday", icon: <PiCakeThin /> },
    { name: "Events", icon: <PiCalendarThin /> },
    { name: "Portrait", icon: <PiUserSquareThin /> },
    { name: "Model", icon: <PiDressThin /> },
    { name: "Travel", icon: <PiAirplaneThin /> },
  ];

  return (
    <div className={styles.services} id="services">
        <div className={styles.services_container}>
          {[0, 1, 2].map((num) => (
            <div
              className={styles.services_slider}
              aria-hidden={!!num}
              key={num}
            >
              {services.map((service) => (
                <div className={styles.service} key={service.name}>
                  <div className={styles.service_icon}>{service.icon}</div>
                  <div className={styles.service_title}>{service.name}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
    </div>
  );
}
