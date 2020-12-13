export interface EnterpriseData {
  city: string | undefined;
  country: string | undefined;
  description: string | undefined;
  enterprise_name: string | undefined;
  email_enterprise: string | undefined;
  facebook: string | undefined;
  linkedin: string | undefined;
  own_enterprise: boolean | undefined;
  phone: string | undefined;
  photo: string | undefined;
  twitter: string | undefined;
  id: number | undefined;
  share_price: number | undefined;
  value: number | undefined;
  enterprise_type: {
    enterprise_type_name: string;
    id: number;
  };
}
