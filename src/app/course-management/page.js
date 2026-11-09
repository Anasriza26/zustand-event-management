import CourseList from "@/components/courses/CourseList";
import CourseSummary from "@/components/courses/CourseSummary";

export default function CourseManagementPage() {
    return (
        <main className="space-y-5">
            <CourseSummary />
            <CourseList />
        </main>
    );
}