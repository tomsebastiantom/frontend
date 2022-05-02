export interface Site{
    id: string;
    title: string;
    address: {
      street: string;
      country: string;
      state: string;
      city: string;
    }
   contacts:{
          main:{
          firstName: string;
        lastName: string;
        email: string;
        phoneNumber: string;
        jobTitle: string;
        address: any;
    }
   } 
   images: string[];
   tags: string[];
  }
  