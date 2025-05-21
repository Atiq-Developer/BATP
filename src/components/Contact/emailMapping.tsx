export const locationJobEmails = [
  { location: "Philadelphia", job: "Services", email: "chantellebosier@batp.org" },
  { location: "Philadelphia", job: "Employment", email: "chantellebosier@batp.org" },
  { location: "Philadelphia", job: "Something else", email: "chantellebosier@batp.org" },
  { location: "Montgomery, Bucks, or Delaware county", job: "Services", email: "chantellebosier@batp.org" },
  { location: "Montgomery, Bucks, or Delaware county", job: "Employment", email: "chantellebosier@batp.org" },
  { location: "Montgomery, Bucks, or Delaware county", job: "Something else", email: "chantellebosier@batp.org" }
];

export const getRecipientEmail = (location: string, job: string) => {
  const mapping = locationJobEmails.find(
    item => item.location === location && item.job === job
  );
  return mapping?.email || "chantellebosier@batp.org";
};