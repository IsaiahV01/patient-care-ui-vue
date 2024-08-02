// services/SessionsHttpClient.ts
import { HttpClientBase } from './HttpClientBase';
import { Appointment } from '../interfaces/Appointment';

export class SessionsHttpClient extends HttpClientBase {
  async getSessions(date: string): Promise<Appointment[]> {
    const formattedDate = this.formatDateForApi(date);
    const url = `/api/Sessions/${formattedDate}/all`;
    return this.get<Appointment[]>(url);
  }

  private formatDateForApi(date: string): string {
    const [month, day, year] = date.split('/');
    return `${year}-${month}-${day}`;
  }
}
