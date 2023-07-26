import Modal from "components/Modal/Modal";
import useModal from "hooks/useModal";

const HomePage = () => {
const {isOpen, toggle} = useModal();

    return(
        <main>
            <h1>Home</h1>
            <button onClick={toggle}>Open modal</button>
            <Modal isOpen={isOpen} toggle={toggle}>
                <p>hello</p>
                <p>pick me</p>
                <button>x</button>
            </Modal>
        </main>
    )
}

export default HomePage;