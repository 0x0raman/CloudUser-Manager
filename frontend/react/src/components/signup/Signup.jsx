import { useAuth } from "../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Flex, Heading, Image, Link, Stack, Text } from "@chakra-ui/react";
import CreateCustomerForm from "../shared/CreateCustomerForm.jsx";
import logo from '../../assets/CloudUserManager.png';

const Signup = () => {
    const { customer, setCustomerFromToken } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (customer) {
            navigate("/dashboard/customers");
        }
    }, [customer, navigate]);

    const imageUrl = logo;

    return (
        <Stack minH="100vh" direction={{ base: "column", md: "row" }}>
            <Flex p={8} flex={1} alignItems="center" justifyContent="center">
                <Stack spacing={6} w="full" maxW="md">
                    <Heading fontSize="2xl" textAlign="center">
                        Register for an account
                    </Heading>
                    <CreateCustomerForm
                        onSuccess={(token) => {
                            localStorage.setItem("access_token", token);
                            setCustomerFromToken();
                            navigate("/dashboard");
                        }}
                    />
                    <Link color="blue.500" href="/" textAlign="center">
                        Have an account? Login now.
                    </Link>
                </Stack>
            </Flex>

            <Flex
                flex={1}
                p={10}
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                bgGradient={{ sm: "linear(to-r, blue.600, purple.600)" }}
            >
                <Text fontSize="5xl" color="white" fontWeight="bold" mb={5} textAlign="center">
                    <Link target="_blank" href="https://clouduser.com/courses">
                        Join Our Community
                    </Link>
                </Text>
                <Image
                    alt="Login Illustration"
                    src={imageUrl}
                    maxW="500px"
                    maxH="400px"
                    objectFit="contain"
                />
            </Flex>
        </Stack>
    );
};

export default Signup;

