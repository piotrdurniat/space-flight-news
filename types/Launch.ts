export interface Launch {
  count: number;
  next: string;
  previous: string;
  results: [
    {
      id: string;
      url: string;
      slug: string;
      name: string;
      status: {
        id: number;
        name: string;
        abbrev: string;
        description: string;
      };
      last_updated: string;
      net: string;
      window_end: string;
      window_start: string;
      probability: number;
      holdreason: string;
      failreason: string;
      hashtag: string;
      launch_service_provider: {
        id: number;
        url: string;
        name: string;
        type: string;
      };
      rocket: {
        id: number;
        configuration: {
          id: number;
          url: string;
          name: string;
          family: string;
          full_name: string;
          variant: string;
          manufacturer?: {
            image_url: string;
          };
        };
      };
      mission: {
        id: number;
        name: string;
        description: string;
        launch_designator: string;
        type: string;
        orbit: {
          id: number;
          name: string;
          abbrev: string;
        };
      };
      pad: {
        id: number;
        url: string;
        agency_id: number;
        name: string;
        info_url: string;
        wiki_url: string;
        map_url: string;
        latitude: string;
        longitude: string;
        location: {
          id: number;
          url: string;
          name: string;
          country_code: string;
          map_image: string;
          timezone_name: string;
          total_launch_count: number;
          total_landing_count: number;
        };
        map_image: string;
        total_launch_count: number;
        orbital_launch_attempt_count: number;
      };
      webcast_live: true;
      image: string;
      infographic: string;
      program: [
        {
          id: number;
          url: string;
          name: string;
          description: string;
          agencies: [
            {
              id: number;
              url: string;
              name: string;
              type: string;
            }
          ];
          image_url: string;
          start_date: string;
          end_date: string;
          info_url: string;
          wiki_url: string;
          mission_patches: [
            {
              id: number;
              name: string;
              priority: number;
              image_url: string;
              agency: {
                id: number;
                url: string;
                name: string;
                type: string;
              };
            }
          ];
        }
      ];
      orbital_launch_attempt_count: number;
      location_launch_attempt_count: number;
      pad_launch_attempt_count: number;
      agency_launch_attempt_count: number;
      orbital_launch_attempt_count_year: number;
      location_launch_attempt_count_year: number;
      pad_launch_attempt_count_year: number;
      agency_launch_attempt_count_year: number;
    }
  ];
}
