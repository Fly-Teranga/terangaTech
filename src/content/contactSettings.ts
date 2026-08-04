export type ContactSettings = {
  address: string;
  email: string;
  phoneNumbers: string[];
  openingHours: string[];
};

export const defaultContactSettings: ContactSettings = {
  address: "Dakar, Sénégal",
  email: "contact@fakitechgroup.com",
  phoneNumbers: ["+221 77 137 76 37", "+221 77 621 78 98"],
  openingHours: ["Lun-Ven : 08h00-18h00", "Samedi : 09h00-13h00"],
};
