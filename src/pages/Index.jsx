import { Container, Text, VStack, Heading, Box, Button, Input, Textarea, Stack } from "@chakra-ui/react";
import { useState } from "react";

const Index = () => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleAddNote = () => {
    if (title.trim() && content.trim()) {
      setNotes([...notes, { title, content }]);
      setTitle("");
      setContent("");
    }
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl">Note Taking App</Heading>
        <Box width="100%" p={4} borderWidth={1} borderRadius="lg">
          <Stack spacing={3}>
            <Input 
              placeholder="Title" 
              value={title} 
              onChange={(e) => setTitle(e.target.value)} 
            />
            <Textarea 
              placeholder="Content" 
              value={content} 
              onChange={(e) => setContent(e.target.value)} 
            />
            <Button colorScheme="teal" onClick={handleAddNote}>Add Note</Button>
          </Stack>
        </Box>
        <VStack spacing={4} width="100%">
          {notes.map((note, index) => (
            <Box key={index} width="100%" p={4} borderWidth={1} borderRadius="lg">
              <Heading as="h3" size="md">{note.title}</Heading>
              <Text mt={2}>{note.content}</Text>
            </Box>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;