import React from "react";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { createChallenge } from "../features/challenges/challengesActions";
import { useAppSelector } from "../hooks/useAppSelector";
import { IUser } from "../interfaces/IUser";
import { useNavigate } from "react-router-dom";
import ButtonLoading from "../components/loading/buttonLoading";
import { CustomeToast } from "../components/ui/customeToast";
import ChallengeCategories from "../components/modals/ChallengeCategories";

interface ChallengeData {
  title: string;
  startDate: Date;
  description: string;
  duration: string;
  categorie: string;
  level: string;
  rules: {
    minParticipants: number;
    maxParticipants: number;
  };
  visibility: "public" | "private";
  createdBy: IUser["_id"] | undefined;
}

const ChallengeForm = () => {
  const { loading, message, error } = useAppSelector(
    (state) => state.challenges
  );
    const [showCategories, setShowCategories] = React.useState(false);
    const [search, setSearch] = React.useState("");
  const { user } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();
  const [challengeData, setChallengeData] = React.useState<ChallengeData>({
    title: "",
    startDate: new Date(),
    description: "",
    duration: "",
    categorie: "",
    level: "",
    rules: {
      minParticipants: 0,
      maxParticipants: 0,
    },
    visibility: "public",
    createdBy: user?._id,
  });
  const dispatch = useAppDispatch();
  console.log(challengeData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setChallengeData({
      ...challengeData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChallengeData({
      ...challengeData,
      [e.target.name]: e.target.checked,
    });
  };

  const handleRuleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChallengeData({
      ...challengeData,
      rules: {
        ...challengeData.rules,
        [e.target.name]: e.target.value,
      },
    });
  };

  const handleCategorySelect = (value: string) => {
    setSearch(value);
    setChallengeData({
      ...challengeData,
      categorie: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(createChallenge(challengeData));

    if (!error) {
      setTimeout(() => {
        navigate("/in/my-challenges");
      }, 1000);
    }
  };

  console.log("is Loading", loading);

  return (
    <div className="challenge-form">
      <CustomeToast message={message} type={error ? "error" : "success"} />
      <div className="form-header text-black px-2 grid items-center justify-center">
        <h1 className="text-3xl font-bold">Create Challenge</h1>
      </div>
      <div className="form-body w-[60%] m-auto">
        <form onSubmit={handleSubmit} className="w-[90%] m-auto grid gap-2">
          <div className="grid gap-2">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Title"
              className="p-2 border border-gray-300 bg-gray-100"
              onChange={handleChange}
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              rows={5}
              id="description"
              placeholder="Description"
              className="p-2 border border-gray-300 bg-gray-100 resize-none"
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-between gap-2">
          <div className="grid gap-2 flex-1">
              <ChallengeCategories
                setFilter={handleCategorySelect}
                setShowCategories={setShowCategories}
                showCategories={showCategories}
              />
              <label htmlFor="category">Category</label>
              <input
                type="text"
                name="categorie"
                id="category"
                placeholder="Category"
                className="p-2 border border-gray-300 bg-gray-100"
                value={search}
                onClick={() => setShowCategories(!showCategories)}
              />
            </div>
            <div className="grid gap-2 flex-1">
              <label htmlFor="category">Start Date</label>
              <input
                type="date"
                name="startDate"
                id="startdate"
                placeholder="startdate"
                className="p-2 border border-gray-300 bg-gray-100"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex justify-between gap-2">
          <div className="grid gap-2 flex-1">
              <label htmlFor="duration">Duration</label>
              <input
                type="text"
                name="duration"
                id="duration"
                placeholder="Duration"
                className="p-2 border border-gray-300 bg-gray-100"
                onChange={handleChange}
              />
            </div>
            <div className="grid gap-2 flex-1">
              <label htmlFor="level">Level</label>
              <input
                type="text"
                name="level"
                id="level"
                placeholder="Level"
                className="p-2 border border-gray-300 bg-gray-100"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex justify-between gap-2">
            <div className="grid gap-2 flex-1">
              <label htmlFor="minParticipants">Minimum Participants</label>
              <input
                type="number"
                name="minParticipants"
                id="minParticipants"
                placeholder="Minimum Participants"
                className="p-2 border border-gray-300 bg-gray-100"
                onChange={handleRuleChange}
              />
            </div>
            <div className="grid gap-2 flex-1">
              <label htmlFor="maxParticipants">Maximum Participants</label>
              <input
                type="number"
                name="maxParticipants"
                id="maxParticipants"
                placeholder="Maximum Participants"
                className="p-2 border border-gray-300 bg-gray-100"
                onChange={handleRuleChange}
              />
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-row-reverse items-center gap-2">
              <label htmlFor="isPrivate">Publish Now?</label>
              <input
                type="checkbox"
                name="visibility"
                id="visibility"
                className="p-2 border border-gray-300"
                onChange={handleCheckboxChange}
              />
            </div>
            <button
              disabled={loading}
              className={
                !loading
                  ? "bg-black text-white py-2 px-5 font-bold hover:bg-gray-700 rounded-sm flex items-center gap-2"
                  : "bg-gray-700 text-white py-2 px-5 font-bold hover:bg-gray-700 rounded-sm flex items-center gap-2"
              }
              type="submit"
            >
              {loading ? (
                <>
                  <ButtonLoading /> Creating
                </>
              ) : (
                <> Create</>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChallengeForm;
