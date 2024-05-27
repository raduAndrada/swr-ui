export const environment = {
  production: true,
  staticData: {
    serverPort: "http://ec2-18-153-93-71.eu-central-1.compute.amazonaws.com:8900/api/",
    trendingApi: "trending-blocks",
    teamApi: "team-blocks",
    imagesApi: "image-blocks"
  },
  dishes: {
    serverPort: "http://localhost:8901/api/",
    dishesApi: "menu",
  },
  commonicationChannel: {
    serverPort: "http://ec2-18-153-93-71.eu-central-1.compute.amazonaws.com:8902/api/",
    emailApi: "communication-channel/email/reservations"
  }
};

