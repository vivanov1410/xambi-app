import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { EditEntryType, EditForm, ValidationType } from './EditForm';

function App() {
  const mockProps = {
    title: "Edit Form",
    description: "This is a sample edit form",
    editEntries: [
    {
      attribute: "name",
      attributeName: "Name",
      type: EditEntryType.Text,
      isRequired: true,
      validations: [ValidationType.RequiredField],
    },
    {
      attribute: "description",
      attributeName: "Description",
      type: EditEntryType.TextArea,
      isRequired: false,
      validations: [ValidationType.TextLengthBelow200],
    },
    {
      attribute: "skills",
      attributeName: "Skills",
      type: EditEntryType.TextList,
      isRequired: false,
    },
    {
      attribute: "education",
      attributeName: "Education",
      type: EditEntryType.DoubleTextList,
      isRequired: false,
    },
    {
      attribute: "resume",
      attributeName: "Resume",
      type: EditEntryType.File,
      isRequired: false,
    },
    {
      attribute: "address",
      attributeName: "Address",
      type: EditEntryType.Address,
      isRequired: true,
    },
    {
      attribute: "profilePhoto",
      attributeName: "Profile Photo",
      type: EditEntryType.Photo,
      isRequired: false,
    },
    {
      attribute: "avatarPhoto",
      attributeName: "Avatar",
      type: EditEntryType.ProfilePhoto,
      isRequired: false,
    },
    {
      attribute: "coverImage",
      attributeName: "Cover Image",
      type: EditEntryType.FilePhoto,
      isRequired: false,
    },
    {
      attribute: "skills",
      attributeName: "Skills",
      type: EditEntryType.Checkbox,
      isRequired: false,
      extraParam: {
        options: ["JavaScript", "React", "Node.js", "Python", "Java"]
      },
    },
    {
      attribute: "blogPost",
      attributeName: "Blog Post",
      type: EditEntryType.Article,
      isRequired: false,
    },
    {
      attribute: "birthDate",
      attributeName: "Birth Date",
      type: EditEntryType.Date,
      isRequired: true,
    },
    {
      attribute: "portfolio",
      attributeName: "Portfolio",
      type: EditEntryType.Showcase,
      isRequired: false,
      extraParam: {
        isInstagramShowcase: false,
        maxPhotos: 5
      },
    },
    {
      attribute: "instagramShowcase",
      attributeName: "Instagram Showcase",
      type: EditEntryType.Showcase,
      isRequired: false,
      extraParam: {
        isInstagramShowcase: true,
        maxPhotos: 9
      },
    },
    {
      attribute: "tags",
      attributeName: "Tags",
      type: EditEntryType.PillList,
      isRequired: false,
    },
    ],
    entityObj: {
      name: "Peter Griffin",
      description: "A passionate developer",
      skills: ["JavaScript", "React"],
      address: {
        street: "123 Spooner St.",
        city: "Quahog",
        state: "RI",
        zipCode: "12345"
      },
      birthDate: "1990-01-01",
      tags: ["developer", "react", "javascript"],
    },
    onSubmitSuccess: (entity) => console.log("Submitted:", entity),
  };

  return (
    <div className="App">
      <Router>
        <div className="App bg-gray-100 min-h-screen p-4">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6">
            <EditForm {...mockProps} />
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
