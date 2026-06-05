import { getAllContacts, getActiveUsers, getContactsCreatedToday } from "@/app/db/contact";

export const revalidate = 60;  // regenerate at most once per minute (Time-based ISR)

export default async function StatsPage() {
  const totalContacts = await getAllContacts();
  const contactsCount = totalContacts.length;

  const activeUsers = await getActiveUsers();
  const activeUsersCount = activeUsers.length;

  const contactsCreatedToday = await getContactsCreatedToday();
  const contactsCreatedTodayCount = contactsCreatedToday.length; 

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">
        Contact Statistics
      </h1>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-lg border p-6 shadow-sm">
          <h2 className="text-sm text-muted-foreground">
            Total Contacts
          </h2>
          <p className="text-4xl font-bold mt-2">
            {contactsCount}
          </p>
        </div>

        <div className="rounded-lg border p-6 shadow-sm">
          <h2 className="text-sm text-muted-foreground">
            Active Users
          </h2>
          <p className="text-4xl font-bold mt-2">
            {activeUsersCount}
          </p>
        </div>

        <div className="rounded-lg border p-6 shadow-sm">
          <h2 className="text-sm text-muted-foreground">
            Contacts Added Today
          </h2>
          <p className="text-4xl font-bold mt-2">
            {contactsCreatedTodayCount}
          </p>
        </div>
      </div>

    </div>
  );
}