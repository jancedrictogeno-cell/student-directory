import StudentCard from './StudentCard';

export default function StudentDirectory({ students }) {
  if (students.length === 0) {
    return (
      <div>
        <p>No students match your search or filter.</p>
      </div>
    );
  }

  return (
    <div>
      {students.map((student) => (
        <StudentCard
          key={student.id}
          student={student}
        />
      ))}
    </div>
  );
}