import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      <Button title="Small - sm" styles="text-sm rounded-sm" />
      <Button title="Small - md" styles="text-sm rounded-md" />
      <Button title="Small - full" styles="text-sm rounded-lg" />

      <Card />
      <Button title="Medium - sm" styles="text-base rounded-sm" />
      <Button title="Medium - md" styles="text-base rounded-md" />
      <Button title="Medium - full" styles="text-base rounded-lg" />

      <Card />
      <Button title="Large - sm" styles="text-lg px-6 py-3 rounded-sm" />
      <Button title="Large - md" styles="text-lg px-6 py-3 rounded-md" />
      <Button title="Large - full" styles="text-lg px-6 py-3 rounded-full" />
      

      <Card />
    </div>
  )
}

export default Landing