import { useRouter } from "next/router"

export default function ProdutosId() {
    const router = useRouter();
    return <>Post: {router.query.id}</>
}