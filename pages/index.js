export default function Home() {}

export async function getServerSideProps() {
  return {
    redirect: {
      destination: "/1",
      permanent: false,
    },
  };
}
