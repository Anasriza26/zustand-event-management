import Navbar from "../components/Navbar";
import UserList from "../components/UserList";
import Counter from "../components/Counter";
import StudentCount from "@/components/StudentCount";
import StudentList from "@/components/StudentList";

export default function Home() {
  return (
    <main>
      <Navbar />

      <hr />

      <Counter />
      <hr />
      <UserList />
      <hr />
      <hr />

      <StudentCount />
      <StudentList />

    </main>
  );
}