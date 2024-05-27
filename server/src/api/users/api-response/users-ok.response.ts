import { ApiResponseOptions } from '@nestjs/swagger';

export const okUsersResponse: ApiResponseOptions = {
  schema: {
    example: [
      {
        _id: '664b51c5b444d329b3be7468',
        first_name: 'Theodore',
        last_name: 'Uzun',
        email: 'uzuntudor@gmail.com',
        password: '$2b$10$u28OJNAlyeD6gxvroZ5uuOCM5/REJf7zpTA7tVVszpeRbJGSsiorW',
        role: 'admin',
        created_at: 'Mon May 20 2024 16:36:05 GMT+0300 (Ora de vară a Europei de Est)'
      },
      {
        _id: '664b6493eff4e3b3e86e3076',
        first_name: 'Alex',
        last_name: 'Uzun',
        email: 'uzunalex@yahoo.com',
        password: '$2b$10$BI1EtvugcDNqnfDayhuM2epYHdSB6i5uRT5oNjCPkeACCTD5TmUSS',
        role: 'user',
        created_at: 'Mon May 20 2024 17:56:19 GMT+0300 (Ora de vară a Europei de Est)'
      }
    ]
  }
};
