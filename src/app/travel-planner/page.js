import TripOverview from "@/components/travel/TripOverview";
import PackingChecklist from "@/components/travel/PackingChecklist";

export default function TravelPlannerPage() {
    return (
        <main className="mx-auto max-w-3xl space-y-6 p-6">
            <h1 className="text-3xl font-bold">
                My Travel Planner
            </h1>

            <TripOverview />

            <PackingChecklist />
        </main>
    );
}