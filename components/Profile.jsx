import PromptCard from "./PromptCard";
import { useRouter } from "next/navigation";

const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
  const router = useRouter();
  return (
    <section className="w-full">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{name} Profile</span>
      </h1>
      <p className="desc text-left">{desc}</p>
      <div className="mt-10 prompt_layout">
        {data.length? (
          data.map((post) => (
            <PromptCard
              posts={post}
              key={post._id}
              handleEdit={() => handleEdit && handleEdit(post)}
              handleDelete={() => handleDelete && handleDelete(post)}
            />
          ))
        ) : (
          <h3 className="text-xl">
            Your Prompt List is emptry {" "}
            <span
              onClick={() => router.push("/create-prompt")}
              className="orange_gradient cursor-pointer font-semibold"
            >
              Create New
            </span>
          </h3>
        )}
      </div>
    </section>
  );
};

export default Profile;
