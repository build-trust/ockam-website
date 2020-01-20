import React from 'react';

import PageSection from "../PageSection";
import Collapse from "../../Collapse/Collapse";
import Text from "../../Text";
import Button from "../../Button";
import Link from "../../Link";
import Heading from "../../Heading";

const JoinTeam = () => {
  return (
    <PageSection>
      <Heading as='h2' textAlign='center' mb={5}>Join The Team</Heading>
      <Collapse title='Software Architect - C Library'>
        <Text mb={4}>We are seeking a seasoned C programmer with expertise in designing reusable and easy to use libraries with robust interfaces. A strong foundation in software architecture principles and experience designing libraries that can support several pluggable implementations for an interface.</Text>
        <Button ml='auto' variant='primary' as={Link} to='https://jobs.lever.co/ockam/ba7af21f-b195-49bf-ab6d-19c9b1d9f5b0'>Apply here</Button>
      </Collapse>
      <Collapse title='Senior Engineer - Distributed Systems'>
        <Text mb={4}>We are seeking a Senior Distributed Systems Engineer with expertise in fault tolerant algorithms (BFT would be great), high throughput real time messaging and streaming systems. Experience building with a modern systems programming languages like Go, Rust, Erlang, Elixir, Scala etc.</Text>
        <Button ml='auto' variant='primary' as={Link} to='https://jobs.lever.co/ockam/0322f5d9-f9b8-4712-88e1-9732a3207fe0'>Apply here</Button>
      </Collapse>
      <Collapse title='Software Architect - Authentication And Messaging Protocols'>
        <Text mb={4}>Secure Protocols Architect with expertise in Applied Cryptography, Authentication and experience designing/implementing Secure Messaging protocols.</Text>
        <Button ml='auto' variant='primary' as={Link} to='https://jobs.lever.co/ockam/d49187d1-f4e2-4d8b-bc59-5a08fe729f3d'>Apply here</Button>
      </Collapse>
      <Collapse title='Software Architect - Embedded Systems'>
        <Text mb={4}>Embedded Systems Architect with expertise developing for various Microcontrollers and SoCs. Experience with ARM processors, various radio protocols, bootloading, firmware, verified/secure boot, cryptographic modules and secure enclaves.</Text>
        <Button ml='auto' variant='primary' as={Link} to='https://jobs.lever.co/ockam/ce3623b2-cce4-42e3-8e5c-8bfbd7b09078'>Apply here</Button>
      </Collapse>
      <Collapse title='Software Architect - Distributed Systems'>
        <Text mb={4}>Distributed Systems Architect with expertise in fault tolerant algorithms (BFT would be great), high throughput real time messaging and streaming systems. Experience using Erlang or Elixir or similar actor model based languages. Experience with the core design of streaming systems like Kafka, Spark Steaming, etc.</Text>
        <Button ml='auto' variant='primary' as={Link} to='https://jobs.lever.co/ockam/ff72e013-40a8-4473-831a-f44aba3bd545'>Apply here</Button>
      </Collapse>
      <Collapse title='Software Architect - Storage And Data Structures'>
        <Text mb={4}>Storage and Database Design Architect with experience designing core database engines. Experience with distributed systems, consensus protocols, graphs and query language design.</Text>
        <Button ml='auto' variant='primary' as={Link} to='https://jobs.lever.co/ockam/790c0e36-e2a1-47fb-9bb2-edd642b3d91c'>Apply here</Button>
      </Collapse>
      <Collapse title='Customer Success Engineer'>
        <Text mb={4}>Sales or Solutions Engineer with customer focus and exposure to full stack IoT system architectures and solution design.</Text>
        <Button ml='auto' variant='primary' as={Link} to='https://jobs.lever.co/ockam/6d767468-89ed-4b92-87dc-46bc69ddce97'>Apply here</Button>
      </Collapse>
      <Collapse title='Senior Product Marketing Manager'>
        <Text mb={4}>Product Marketing Manager with experience messaging to builders and who has exposure to open source tools, IoT systems, and enterprise software</Text>
        <Button ml='auto' variant='primary' as={Link} to='https://jobs.lever.co/ockam/d5ec20f0-8d82-4065-9a52-6387a40b85f6'>Apply here</Button>
      </Collapse>
      <Collapse title='Your Dream Role'>
        <Text mb={4}>If you are excited about what Ockam&amp;s mission and our products, reach out to us and let us know where you think you fit on our team. It could be a hybrid of our other roles, or something that is in our blind spot.</Text>
        <Button ml='auto' variant='primary'>Connect with The Team</Button>
      </Collapse>
    </PageSection>
  );
};


export default JoinTeam;
