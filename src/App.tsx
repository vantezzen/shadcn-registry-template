import CoolText from "./components/ui/cool-text";

function App() {
  return (
    <div className="max-w-xl mx-auto my-12 rounded-lg border border-gray-200 p-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">Custom Registry</h1>
      <p>Add your custom components here to preview them.</p>

      <CoolText>This is a custom component.</CoolText>
    </div>
  );
}

export default App;
