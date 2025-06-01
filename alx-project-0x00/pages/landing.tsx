import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      <Button title="Small - sm" className="text-sm rounded-sm" />
      <Button title="Small - md" className="text-sm rounded-md" />
      <Button title="Small - full" className="text-sm rounded-full" />

      <Card />
      <Button title="Medium - sm" className="text-base rounded-sm" />
      <Button title="Medium - md" className="text-base rounded-md" />
      <Button title="Medium - full" className="text-base rounded-full" />

      <Card />
      <Button title="Large - sm" className="text-lg px-6 py-3 rounded-sm" />
      <Button title="Large - md" className="text-lg px-6 py-3 rounded-md" />
      <Button title="Large - full" className="text-lg px-6 py-3 rounded-full" />

      <Card />
    </div>
  )
}

export default Landing